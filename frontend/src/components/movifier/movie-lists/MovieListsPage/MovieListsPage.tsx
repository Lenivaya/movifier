import React, {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useState
} from 'react'
import {
  MovieListSearchCriteriaInput,
  MovieOrderByWithRelationAndSearchRelevanceInput,
  useSearchMovieListsSuspenseQuery
} from '@/lib'
import { useMutative } from 'use-mutative'
import { SearchBar } from '@/components/movifier/generic/search'
import { AppLoader } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'
import { motion } from 'framer-motion'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { gql } from '@apollo/client'
import { MovieListCardList } from '@/components/movifier/movie-lists/MovieListCardList'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import { Option } from '@mobily/ts-belt'

const SearchMovieLists = gql`
  query SearchMovieLists($searchCriteria: MovieListSearchCriteriaInput!) {
    searchMovieLists(take: 5, searchCriteria: $searchCriteria) {
      ...MovieListCardItem
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

export function MovieListsPage({
  showCreateButton = false,
  render = (
    searchCriteria: MovieListSearchCriteriaInput,
    pagination,
    setPagination,
    paginationResult
  ) => (
    <Suspense fallback={<AppLoader />}>
      <MovieListPageCardListSuspense
        searchCriteria={searchCriteria}
        pagination={pagination}
        setPagination={setPagination}
        paginationResult={paginationResult}
      />
    </Suspense>
  )
}: {
  showCreateButton?: boolean
  render?: (
    searchCriteria: MovieListSearchCriteriaInput,
    pagination: IClientSideOffsetPagination,
    setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>,
    paginationResult: IClientSideOffsetPaginationResult
  ) => React.ReactNode
}) {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MovieListSearchCriteriaInput>({
      search: ''
    })

  const [pagination, setPagination] =
    useState<IClientSideOffsetPagination>(DEFAULT_PAGINATION)
  const [paginationResult, setPaginationResult] =
    useMutative<IClientSideOffsetPaginationResult>(DEFAULT_PAGINATION_RESULT)

  useEffect(
    () => setPagination((prev) => ({ ...prev, currentPage: 1 })),
    [searchCriteria]
  )
  useEffect(
    () => setPaginationResult(DEFAULT_PAGINATION_RESULT),
    [searchCriteria]
  )

  const criteriaChanger =
    (field: keyof MovieListSearchCriteriaInput) => (value: string) =>
      setSearchCriteria((prev) => ({ ...prev, [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie list'
        />
      </div>

      {render(searchCriteria, pagination, setPagination, paginationResult)}

      {showCreateButton && (
        <Link href={'/movie-lists/new'} passHref>
          <motion.div
            className='fixed z-50 bottom-[90px] -right-10 focus:ring-0 focus:ring-transparent focus:ring-offset-0'
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

const MovieListPageCardListSuspense: FC<{
  searchCriteria: MovieListSearchCriteriaInput
  pagination: IClientSideOffsetPagination
  setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>
  paginationResult: IClientSideOffsetPaginationResult
}> = ({ searchCriteria, pagination, setPagination, paginationResult }) => {
  const { data } = useSearchMovieListsSuspenseQuery({
    variables: {
      searchCriteria
    },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalCount: data?.searchMovieLists.length
    }))
  }, [data])

  return (
    <MovieListCardList
      movieLists={data?.searchMovieLists.slice(
        paginationResult.startIndex,
        paginationResult.endIndex
      )}
    />
  )
}
