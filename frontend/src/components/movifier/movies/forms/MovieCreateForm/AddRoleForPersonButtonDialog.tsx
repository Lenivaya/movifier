import { Updater, useMutative } from 'use-mutative'
import {
  MoviePersonsSelection,
  PersonOnMovieType
} from '@/components/movifier/movies/forms/MovieCreateForm/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useGetMovieCrewMemberTypesForAdminSuspenseQuery } from '@/lib'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button, Card, CardContent } from '@/components/ui'
import { SearchBar } from '@/components/movifier/generic/search'
import { MovieCrewMemberTypeCard } from '@/components/movifier/crew-member-types/CrewMemberTypeCard/CrewMemberTypeCard'

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
