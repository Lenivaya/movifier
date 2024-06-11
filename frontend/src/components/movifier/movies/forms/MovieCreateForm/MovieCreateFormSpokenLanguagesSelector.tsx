import {
  MinimalisticLanguageSearchCardItemFragment,
  useGetSelectedMovieLanguagesQuery,
  useSearchLanguagesForMovieCreationQuery
} from '@/lib'
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
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

export const SearchLanguagesForMovieCreation = gql`
  query SearchLanguagesForMovieCreation(
    $search: String!
    $alreadySelectedLanguages: [String!]!
  ) {
    movieSpokenLanguages(
      take: 5
      where: {
        AND: [
          { iso_639_1: { notIn: $alreadySelectedLanguages } }
          {
            OR: [
              { name: { contains: $search, mode: insensitive } }
              { iso_639_1: { contains: $search, mode: insensitive } }
            ]
          }
        ]
      }
    ) {
      ...MinimalisticLanguageSearchCardItem
    }
  }

  query GetSelectedMovieLanguages($spokenLanguagesIds: [String!]!) {
    movieSpokenLanguages(where: { iso_639_1: { in: $spokenLanguagesIds } }) {
      ...MinimalisticLanguageSearchCardItem
    }
  }
`

const MinimalisticLanguageSearchCardFragment = gql`
  fragment MinimalisticLanguageSearchCardItem on MovieSpokenLanguage {
    iso_639_1
    name
  }
`

function MovieSpokenLanguageCard({
  iso_639_1,
  name
}: MinimalisticLanguageSearchCardItemFragment) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{iso_639_1}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function SelectedLanguages({
  spokenLanguagesIds,
  setSpokenLanguagesIds
}: {
  spokenLanguagesIds: string[]
  setSpokenLanguagesIds: Dispatch<SetStateAction<string[]>>
}) {
  const { data } = useGetSelectedMovieLanguagesQuery({
    variables: { spokenLanguagesIds },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {data?.movieSpokenLanguages.map((language) => (
        <div key={language.iso_639_1} className={'flex flex-col gap-3'}>
          <MovieSpokenLanguageCard {...language} />
          <Button
            variant={'destructive'}
            onClick={(_) =>
              setSpokenLanguagesIds((prev) =>
                prev.filter((id) => id !== language.iso_639_1)
              )
            }
          >
            <Minus />
          </Button>
        </div>
      ))}
    </div>
  )
}

export function MovieCreateFormSpokenLanguagesSelector({
  spokenLanguagesIds,
  setSpokenLanguagesIds
}: {
  spokenLanguagesIds: string[]
  setSpokenLanguagesIds: Dispatch<SetStateAction<string[]>>
}) {
  const [languageSearch, setLanguageSearch] = useState('')
  const { data: languageSearchData } = useSearchLanguagesForMovieCreationQuery({
    variables: {
      search: languageSearch,
      alreadySelectedLanguages: spokenLanguagesIds
    },
    fetchPolicy: 'cache-and-network'
  })
  const isLanguagesFound =
    isSome(languageSearch) &&
    isSome(languageSearchData?.movieSpokenLanguages) &&
    languageSearchData?.movieSpokenLanguages?.length > 0

  return (
    <div className={'flex flex-col gap-5'}>
      <div className='grid grid-cols-[40%_60%] gap-2'>
        <Popover open={isLanguagesFound && languageSearch.length > 0}>
          <PopoverTrigger autoFocus={false}>
            <Button
              variant={'outline'}
              className='w-full'
              autoFocus={false}
              type={'button'}
              disabled
            >
              Add language
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='min-w-[500px] p-0'
            autoFocus={false}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command autoFocus={false}>
              <CommandEmpty>No languages found</CommandEmpty>
              <CommandList autoFocus={false}>
                {(languageSearchData?.movieSpokenLanguages ?? []).map(
                  (language) => {
                    return (
                      <CommandItem
                        autoFocus={false}
                        key={language.iso_639_1}
                        value={language.iso_639_1}
                        className={'flex flex-row gap-3'}
                        onSelect={(_e) => {
                          setSpokenLanguagesIds((prev) => [
                            ...prev,
                            language.iso_639_1
                          ])
                        }}
                      >
                        {language.iso_639_1}
                        <span
                          className={
                            'font-semibold text-xs underline underline-offset-2'
                          }
                        >
                          {language.name}
                        </span>
                      </CommandItem>
                    )
                  }
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          onChange={F.debounce((e) => setLanguageSearch(e.target.value), 150)}
          placeholder={'Search for language...'}
        ></Input>
      </div>

      <SelectedLanguages {...{ spokenLanguagesIds, setSpokenLanguagesIds }} />
    </div>
  )
}
