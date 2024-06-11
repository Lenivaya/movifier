import { useSearchPersonsForMovieCreationQuery } from '@/lib'
import { Button } from '@/components/ui'
import React, { useState } from 'react'
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
import { gql } from '@apollo/client'
import { MoviePersonsSelection } from '@/components/movifier/movies/forms/MovieCreateForm/types'
import { Updater } from 'use-mutative'
import { SelectedPersons } from '@/components/movifier/movies/forms/MovieCreateForm/SelectedPersons'

export const SearchPersonsForMovieCreation = gql`
  query SearchPersonsForMovieCreation(
    $search: String!
    $alreadySelectedPersons: [String!]!
  ) {
    movieCrewMembers(
      take: 5
      where: {
        AND: [
          { id: { notIn: $alreadySelectedPersons } }
          {
            OR: [
              { name: { contains: $search, mode: insensitive } }
              #              { description: { contains: $search, mode: insensitive } }
            ]
          }
        ]
      }
    ) {
      ...MinimalisticPersonSearchItem
    }
  }

  query GetSelectedPersons($selectedIds: [String!]!) {
    movieCrewMembers(where: { id: { in: $selectedIds } }) {
      ...PersonCardItem
    }
  }

  fragment MinimalisticPersonSearchItem on MovieCrewMember {
    id
    name
    description
    imdbId
  }
`

export function MovieCreateFormPersonsSelector({
  crewMembers,
  setCrewMembers
}: {
  crewMembers: MoviePersonsSelection[]
  setCrewMembers: Updater<MoviePersonsSelection[]>
}) {
  const [search, setSearch] = useState('')
  const { data: personsSearchData } = useSearchPersonsForMovieCreationQuery({
    variables: {
      search: search,
      alreadySelectedPersons: crewMembers.map((x) => x.movieCrewMemberId)
    },
    fetchPolicy: 'cache-and-network'
  })
  const isPersonsFound =
    isSome(search) &&
    isSome(personsSearchData?.movieCrewMembers) &&
    personsSearchData?.movieCrewMembers?.length > 0

  return (
    <div className={'flex flex-col gap-5'}>
      <div className='grid grid-cols-[40%_60%] gap-2'>
        <Popover open={isPersonsFound && search.length > 0}>
          <PopoverTrigger autoFocus={false}>
            <Button
              variant={'outline'}
              className='w-full'
              autoFocus={false}
              type={'button'}
              disabled
            >
              Add person
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='min-w-[500px] p-0'
            autoFocus={false}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command autoFocus={false}>
              <CommandEmpty>No persons found</CommandEmpty>
              <CommandList autoFocus={false}>
                {(personsSearchData?.movieCrewMembers ?? []).map((person) => {
                  return (
                    <CommandItem
                      autoFocus={false}
                      key={person.id}
                      value={person.name}
                      className={'flex flex-row gap-3'}
                      onSelect={(_e) => {
                        setCrewMembers((prev) => [
                          ...prev,
                          {
                            movieCrewMemberId: person.id,
                            personOnMovieRoles: []
                          }
                        ])
                      }}
                    >
                      {person.name}
                    </CommandItem>
                  )
                })}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          onChange={F.debounce((e) => setSearch(e.target.value), 150)}
          placeholder={'Search for person...'}
        ></Input>
      </div>

      <SelectedPersons {...{ crewMembers, setCrewMembers }} />
    </div>
  )
}
