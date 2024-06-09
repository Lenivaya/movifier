import {
  useGetMovieCrewMemberTypesForAdminSuspenseQuery,
  useGetSelectedPersonsQuery,
  useSearchPersonsForMovieCreationQuery
} from '@/lib'
import { Button, Card, CardContent } from '@/components/ui'
import React, { useCallback, useEffect, useState } from 'react'
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
import { Badge } from '@/components/ui/badge'
import {
  MoviePersonsSelection,
  PersonOnMovieType
} from '@/components/movifier/movies/forms/MovieCreateForm/types'
import { PersonCard } from '@/components/movifier/persons/PersonCard/PersonCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import { Updater, useMutative } from 'use-mutative'
import { MovieCrewMemberTypeCard } from '@/components/movifier/crew-member-types/CrewMemberTypeCard/CrewMemberTypeCard'
import { SearchBar } from '@/components/movifier/generic/search'

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

function SelectedPersons({
  crewMembers,
  setCrewMembers
}: {
  crewMembers: MoviePersonsSelection[]
  setCrewMembers: Updater<MoviePersonsSelection[]>
}) {
  const { data } = useGetSelectedPersonsQuery({
    variables: { selectedIds: crewMembers.map((x) => x.movieCrewMemberId) },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex w-full flex-grow flex-row flex-wrap justify-center gap-5'>
      {data?.movieCrewMembers.map((person) => {
        const crewMember = crewMembers.find(
          ({ movieCrewMemberId }) => movieCrewMemberId === person.id
        )

        return (
          <div
            key={person.id}
            className={'flex flex-col justify-center gap-3 items-center '}
          >
            <PersonCard {...person} />

            <div className='flex flex-row flex-wrap w-full gap-3'>
              {crewMember?.personOnMovieRoles.map((role) => {
                const isRoleSelected = crewMember.personOnMovieRoles?.some(
                  (someRole) => someRole.id === role.id
                )

                return (
                  <Badge
                    className={'flex-grow'}
                    key={role.id}
                    onClick={() => {
                      if (!isRoleSelected) return

                      setCrewMembers((draft) => {
                        const crewMember = draft.find(
                          ({ movieCrewMemberId }) =>
                            movieCrewMemberId === person.id
                        )
                        if (!crewMember) return draft
                        crewMember.personOnMovieRoles =
                          crewMember.personOnMovieRoles.filter(
                            (x) => x.id !== role.id
                          )
                      })
                    }}
                  >
                    <span className={'text-center mx-auto'}>{role.name}</span>
                  </Badge>
                )
              })}
            </div>

            <AddRoleForPersonButtonDialog
              crewMemberId={person.id}
              setCrewMembers={setCrewMembers}
            />

            <Button
              variant={'destructive'}
              className={'w-full'}
              onClick={(_) =>
                setCrewMembers((prev) =>
                  prev.filter(
                    ({ movieCrewMemberId }) => movieCrewMemberId !== person.id
                  )
                )
              }
            >
              <Minus />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

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

export const DEFAULT_PAGE_SIZE = 6

const DEFAULT_PAGINATION: IClientSideOffsetPagination = {
  currentPage: 1,
  totalCount: 0,
  pageSize: DEFAULT_PAGE_SIZE * 10
}

const DEFAULT_PAGINATION_RESULT: IClientSideOffsetPaginationResult = {
  startIndex: 0,
  endIndex: DEFAULT_PAGE_SIZE
}

export function AddRoleForPersonButtonDialog({
  crewMemberId,
  setCrewMembers
}: {
  crewMemberId: string
  setCrewMembers: Updater<MoviePersonsSelection[]>
}) {
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  const [search, setSearch] = useState('')
  const { data } = useGetMovieCrewMemberTypesForAdminSuspenseQuery({
    fetchPolicy: 'cache-and-network',
    variables: { search }
  })

  const [pagination, setPagination] =
    useState<IClientSideOffsetPagination>(DEFAULT_PAGINATION)
  const [paginationResult, setPaginationResult] =
    useMutative<IClientSideOffsetPaginationResult>(DEFAULT_PAGINATION_RESULT)

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalCount: data?.movieCrewMemberTypes.length
    }))
  }, [data])

  const onRoleClick = useCallback(
    (type: PersonOnMovieType) => (_event: React.MouseEvent<HTMLDivElement>) => {
      setCrewMembers((draft) => {
        draft
          .find((x) => x.movieCrewMemberId === crewMemberId)
          ?.personOnMovieRoles.push(type)

        setIsDialogOpened(false)
      })
    },
    [setCrewMembers, crewMemberId]
  )

  return (
    <Dialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
      <DialogTrigger asChild>
        <Button className={'w-full'}>Add role</Button>
      </DialogTrigger>
      <DialogContent className='h-[90vh] min-w-[80%]'>
        <DialogHeader>
          <DialogTitle>New role for crew member</DialogTitle>
          <DialogDescription>Add role for crew member</DialogDescription>
        </DialogHeader>

        <Card className={'relative h-full flex flex-col justify-between'}>
          <CardContent className={'h-full'}>
            <div className={'max-lg:w-full w-5/6 pl-2 pr-2 mx-auto mt-5'}>
              <SearchBar
                search={search || ''}
                handleSearch={setSearch}
                placeholder='Search for a member type'
              />
            </div>

            <div className='grid grid-cols-3 justify-center gap-5 m-5'>
              {data?.movieCrewMemberTypes
                .slice(paginationResult.startIndex, paginationResult.endIndex)
                .map((type) => (
                  <div key={type.id} onClick={onRoleClick(type)}>
                    <MovieCrewMemberTypeCard {...type} />
                  </div>
                ))}
            </div>
          </CardContent>

          <div className='absolute bottom-0 pt-3 h-[6vh] w-full overflow-hidden bg-neutral-100/80 transition-all hover:h-[8vh] dark:bg-transparent/60'>
            <ClientSideOffsetPagination
              pagination={pagination}
              setPagination={setPagination}
              paginationResult={paginationResult}
              setPaginationResult={setPaginationResult}
            />
          </div>
        </Card>

        <DialogFooter className={'flex w-full'}>
          <Button onClick={(_) => setIsDialogOpened((prev) => !prev)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
