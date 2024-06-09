import {
  useGetSelectedMovieGenresQuery,
  useGetSelectedMovieStudiosQuery,
  useSearchGenresForMovieCreationQuery,
  useSearchStudiosForMovieCreationQuery
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
import { Badge } from '@/components/ui/badge'

export const SearchStudiosForMovieCreation = gql`
  query SearchStudiosForMovieCreation(
    $search: String!
    $alreadySelectedStudios: [String!]!
  ) {
    movieStudios(
      take: 5
      where: {
        AND: [
          { id: { notIn: $alreadySelectedStudios } }
          { name: { contains: $search, mode: insensitive } }
        ]
      }
    ) {
      ...MinimalisticStudioSearchItem
    }
  }

  query GetSelectedMovieStudios($selectedIds: [String!]!) {
    movieStudios(where: { id: { in: $selectedIds } }) {
      ...MinimalisticStudioSearchItem
    }
  }

  fragment MinimalisticStudioSearchItem on MovieStudio {
    id
    name
  }
`

function SelectedStudios({
  studiosIds,
  setStudiosIds
}: {
  studiosIds: string[]
  setStudiosIds: Dispatch<SetStateAction<string[]>>
}) {
  const { data } = useGetSelectedMovieStudiosQuery({
    variables: { selectedIds: studiosIds },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {data?.movieStudios.map((studio) => (
        <div key={studio.id} className={'flex flex-col gap-3'}>
          <Badge>{studio.name}</Badge>
          <Button
            variant={'destructive'}
            onClick={(_) =>
              setStudiosIds((prev) => prev.filter((id) => id !== studio.id))
            }
          >
            <Minus />
          </Button>
        </div>
      ))}
    </div>
  )
}

export function MovieCreateFormStudiosSelector({
  studiosIds,
  setStudiosIds
}: {
  studiosIds: string[]
  setStudiosIds: Dispatch<SetStateAction<string[]>>
}) {
  const [search, setSearch] = useState('')
  const { data: studioSearchData } = useSearchStudiosForMovieCreationQuery({
    variables: {
      search: search,
      alreadySelectedStudios: studiosIds
    },
    fetchPolicy: 'cache-and-network'
  })
  const isStudiosFound =
    isSome(search) &&
    isSome(studioSearchData?.movieStudios) &&
    studioSearchData?.movieStudios?.length > 0

  return (
    <div className={'flex flex-col gap-5'}>
      <div className='grid grid-cols-[40%_60%] gap-2'>
        <Popover open={isStudiosFound && search.length > 0}>
          <PopoverTrigger autoFocus={false}>
            <Button
              variant={'outline'}
              className='w-full'
              autoFocus={false}
              type={'button'}
              disabled
            >
              Add studio
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
                {(studioSearchData?.movieStudios ?? []).map((studio) => {
                  return (
                    <CommandItem
                      autoFocus={false}
                      key={studio.id}
                      value={studio.name}
                      className={'flex flex-row gap-3'}
                      onSelect={(_e) => {
                        setStudiosIds((prev) => [...prev, studio.id])
                      }}
                    >
                      {studio.name}
                    </CommandItem>
                  )
                })}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          onChange={F.debounce((e) => setSearch(e.target.value), 150)}
          placeholder={'Search for studio...'}
        ></Input>
      </div>

      <SelectedStudios {...{ studiosIds, setStudiosIds }} />
    </div>
  )
}
