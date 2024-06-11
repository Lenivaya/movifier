import React, {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useState
} from 'react'
import { useSearchPersonsSuspenseQuery } from '@/lib'
import { gql } from '@apollo/client'
import { useMutative } from 'use-mutative'
import { SearchBar } from '@/components/movifier/generic/search'
import { AppLoader } from '@/components/movifier/generic'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import { useIsAdmin } from '@/lib/hooks/CurrentUser'
import { Link } from 'next-view-transitions'
import { motion } from 'framer-motion'
import { PlusCircledIcon } from '@radix-ui/react-icons'

import { PersonCardList } from '@/components/movifier/persons/PersonCardList'

const SearchPersons = gql`
  query SearchPersons($search: String! = "", $take: Int! = 5, $skip: Int! = 0) {
    movieCrewMembers(
      take: $take
      skip: $skip
      where: {
        OR: [
          { name: { contains: $search, mode: insensitive } }
          { description: { contains: $search, mode: insensitive } }
        ]
      }
    ) {
      ...PersonCardItem
    }
  }
`

export const DEFAULT_PAGE_SIZE = 5

const DEFAULT_PAGINATION: IClientSideOffsetPagination = {
  currentPage: 1,
  totalCount: 0,
  pageSize: DEFAULT_PAGE_SIZE * 10
}

const DEFAULT_PAGINATION_RESULT: IClientSideOffsetPaginationResult = {
  startIndex: 0,
  endIndex: DEFAULT_PAGE_SIZE
}

export function PersonsPage({
  render = (search, pagination, setPagination, paginationResult) => (
    <PersonsPageCardListSuspense
      search={search}
      pagination={pagination}
      setPagination={setPagination}
      paginationResult={paginationResult}
    />
  )
}: {
  render?: (
    search: string,
    pagination: IClientSideOffsetPagination,
    setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>,
    paginationResult: IClientSideOffsetPaginationResult
  ) => React.ReactNode
}) {
  const isAdmin = useIsAdmin()

  const [search, setSearch] = useState('')
  const [pagination, setPagination] =
    useState<IClientSideOffsetPagination>(DEFAULT_PAGINATION)
  const [paginationResult, setPaginationResult] =
    useMutative<IClientSideOffsetPaginationResult>(DEFAULT_PAGINATION_RESULT)

  useEffect(
    () => setPagination((prev) => ({ ...prev, currentPage: 1 })),
    [search]
  )
  useEffect(() => setPaginationResult(DEFAULT_PAGINATION_RESULT), [search])

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={search || ''}
          handleSearch={setSearch}
          placeholder='Search for a person...'
        />
      </div>

      <div className='w-full mx-auto my-auto min-h-[90vh] flex justify-center pb-5'>
        <Suspense fallback={<AppLoader />}>
          {render(search, pagination, setPagination, paginationResult)}
        </Suspense>
      </div>

      {isAdmin && (
        <Link href={'/persons/new'} passHref>
          <motion.div
            className='absolute z-50 bottom-[90px] -right-10 focus:ring-0 focus:ring-transparent focus:ring-offset-0'
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{ x: -90 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <PlusCircledIcon opacity={100} className={'h-[2.5em] w-auto'} />
          </motion.div>
        </Link>
      )}

      <div className='sticky bottom-0 pt-3 h-[6vh] w-full overflow-hidden bg-neutral-100/80 transition-all hover:h-[8vh] dark:bg-transparent/60'>
        <ClientSideOffsetPagination
          pagination={pagination}
          setPagination={setPagination}
          paginationResult={paginationResult}
          setPaginationResult={setPaginationResult}
        />
      </div>
    </main>
  )
}

const PersonsPageCardListSuspense: FC<{
  search: string
  pagination: IClientSideOffsetPagination
  setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>
  paginationResult: IClientSideOffsetPaginationResult
}> = ({ search, pagination, setPagination, paginationResult }) => {
  const { data } = useSearchPersonsSuspenseQuery({
    variables: {
      search,
      take: pagination.pageSize
    },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalCount: data?.movieCrewMembers.length
    }))
  }, [data])

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <PersonCardList
        persons={data?.movieCrewMembers.slice(
          paginationResult.startIndex,
          paginationResult.endIndex
        )}
      />
    </div>
  )
}
