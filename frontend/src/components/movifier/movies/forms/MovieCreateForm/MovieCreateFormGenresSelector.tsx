import {
  useGetSelectedMovieGenresQuery,
  useSearchGenresForMovieCreationQuery
} from '@/lib'
import { Button } from '@/components/ui'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { isSome } from '@/lib/types'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { F } from '@mobily/ts-belt'
import { Minus } from 'lucide-react'
import { gql } from '@apollo/client'
import { MovieGenreCard } from '@/components/movifier/genres/MovieGenreCard/MovieGenreCard'

export const SearchLanguagesForMovieCreation = gql`
  query SearchGenresForMovieCreation(
    $search: String!
    $alreadySelectedGenres: [String!]!
  ) {
    genres(
      take: 5
      where: {
        AND: [
          { id: { notIn: $alreadySelectedGenres } }
          { name: { contains: $search, mode: insensitive } }
        ]
      }
    ) {
      ...MinimalisticGenreSearchItem
    }
  }

  query GetSelectedMovieGenres($genresIds: [String!]!) {
    genres(where: { id: { in: $genresIds } }) {
      ...MovieGenreCardItem
    }
  }
`

const MinimalisticGenreSearchFragment = gql`
  fragment MinimalisticGenreSearchItem on Genre {
    id
    name
  }
`

function SelectedGenres({
  genresIds,
  setGenresIds
}: {
  genresIds: string[]
  setGenresIds: Dispatch<SetStateAction<string[]>>
}) {
  const { data } = useGetSelectedMovieGenresQuery({
    variables: { genresIds: genresIds },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {data?.genres.map((genre) => (
        <div key={genre.id} className={'flex flex-col gap-3'}>
          <MovieGenreCard {...genre} />
          <Button
            variant={'destructive'}
            onClick={(_) =>
              setGenresIds((prev) => prev.filter((id) => id !== genre.id))
            }
          >
            <Minus />
          </Button>
        </div>
      ))}
    </div>
  )
}

export function MovieCreateFormGenresSelector({
  genresIds,
  setGenresIds
}: {
  genresIds: string[]
  setGenresIds: Dispatch<SetStateAction<string[]>>
}) {
  const [search, setSearch] = useState('')
  const { data: genresSearchData } = useSearchGenresForMovieCreationQuery({
    variables: {
      search: search,
      alreadySelectedGenres: genresIds
    },
    fetchPolicy: 'cache-and-network'
  })
  const isGenresFound =
    isSome(search) &&
    isSome(genresSearchData?.genres) &&
    genresSearchData?.genres?.length > 0

  return (
    <div className={'flex flex-col gap-5'}>
      <div className='grid grid-cols-[40%_60%] gap-2'>
        <Popover open={isGenresFound && search.length > 0}>
          <PopoverTrigger autoFocus={false}>
            <Button
              variant={'outline'}
              className='w-full'
              autoFocus={false}
              type={'button'}
              disabled
            >
              Add genre
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='min-w-[500px] p-0'
            autoFocus={false}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command autoFocus={false}>
              <CommandEmpty>No genres found</CommandEmpty>
              <CommandList autoFocus={false}>
                {(genresSearchData?.genres ?? []).map((genre) => {
                  return (
                    <CommandItem
                      autoFocus={false}
                      key={genre.id}
                      value={genre.name}
                      className={'flex flex-row gap-3'}
                      onSelect={(_e) => {
                        setGenresIds((prev) => [...prev, genre.id])
                      }}
                    >
                      {genre.name}
                    </CommandItem>
                  )
                })}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          onChange={F.debounce((e) => setSearch(e.target.value), 150)}
          placeholder={'Search for language...'}
        ></Input>
      </div>

      <SelectedGenres {...{ genresIds, setGenresIds }} />
    </div>
  )
}
