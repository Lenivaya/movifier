import React, {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useState
} from 'react'
import {
  MovieOrderByWithRelationAndSearchRelevanceInput,
  MoviesSearchCriteriaInput,
  useSearchMoviesSuspenseQuery
} from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { gql } from '@apollo/client'
import { useMutative } from 'use-mutative'
import { SearchBar } from '@/components/movifier/generic/search'
import { AppLoader } from '@/components/movifier/generic'
import { Option } from '@mobily/ts-belt'
import { MoviesPageGenreSelect } from '@/components/movifier/movies/MoviesPage/MoviesPageGenreSelect'
import { MoviesPageDecadesSelect } from '@/components/movifier/movies/MoviesPage/MoviesPageDecadesSelect'
import { MoviesPageYearSelect } from '@/components/movifier/movies/MoviesPage/MoviesPageYearSelect'
import { isSome } from '@/lib/types'
import { MoviesPageOrderBySelect } from '@/components/movifier/movies/MoviesPage/MoviesPageOrderBySelect'
import { MoviesPageLanguageSelect } from '@/components/movifier/movies/MoviesPage/MoviesPageLanguageSelect'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import { useIsAdmin } from '@/lib/hooks/CurrentUser'
import { Link } from 'next-view-transitions'
import { motion } from 'framer-motion'
import { PlusCircledIcon } from '@radix-ui/react-icons'

const SearchMovies = gql`
  query SearchMovies(
    $searchCriteria: MoviesSearchCriteriaInput!
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
    $take: Int! = 5
    $skip: Int! = 0
  ) {
    searchMovies(
      take: $take
      skip: $skip
      searchCriteria: $searchCriteria
      orderBy: $orderBy
    ) {
      ...MovieCardItem
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

export function MoviesPage({
  initialSearchCriteria = {
    search: '',
    genre: null,
    decade: null,
    year: null,
    keyword: null,
    language: null
  },
  render = (
    searchCriteria,
    orderBy,
    pagination,
    setPagination,
    paginationResult
  ) => (
    <MoviesPageCardListSuspense
      searchCriteria={searchCriteria}
      orderBy={orderBy}
      pagination={pagination}
      setPagination={setPagination}
      paginationResult={paginationResult}
    />
  ),
  hideOrdering = false
}: {
  initialSearchCriteria?: MoviesSearchCriteriaInput
  render?: (
    searchCriteria: MoviesSearchCriteriaInput,
    orderBy: Option<MovieOrderByWithRelationAndSearchRelevanceInput>,
    pagination: IClientSideOffsetPagination,
    setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>,
    paginationResult: IClientSideOffsetPaginationResult
  ) => React.ReactNode
  hideOrdering?: boolean
}) {
  const isAdmin = useIsAdmin()

  const [searchCriteria, setSearchCriteria] =
    useMutative<MoviesSearchCriteriaInput>(initialSearchCriteria)
  const [orderBy, setOrderBy] =
    useMutative<Option<MovieOrderByWithRelationAndSearchRelevanceInput>>(null)

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
    <T,>(field: keyof MoviesSearchCriteriaInput) =>
    (value: T) =>
      setSearchCriteria((prev) => ({ ...prev, [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className='w-5/6 ml-10 mr-10 p-3 gap-5 flex flex-wrap justify-center bg-slate-200/30 rounded-lg shadow-lg '>
        <MoviesPageGenreSelect
          criteria={searchCriteria}
          setGenre={criteriaChanger('genre')}
        />
        <MoviesPageLanguageSelect
          criteria={searchCriteria}
          setLanguage={criteriaChanger('language')}
        />
        <MoviesPageDecadesSelect
          criteria={searchCriteria}
          setDecade={criteriaChanger<Option<number>>('decade')}
          setYear={criteriaChanger<Option<number>>('year')}
        />
        {hideOrdering ? null : (
          <MoviesPageOrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />
        )}
      </div>

      <MoviesPageYearSelect
        decade={searchCriteria.decade}
        year={searchCriteria.year}
        setYear={criteriaChanger<Option<number>>('year')}
      />

      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie'
        />
      </div>

      <div className='w-full mx-auto my-auto min-h-[90vh] flex justify-center pb-5'>
        <Suspense fallback={<AppLoader />}>
          {render(
            searchCriteria,
            orderBy,
            pagination,
            setPagination,
            paginationResult
          )}
        </Suspense>
      </div>

      {isAdmin && (
        <Link href={'/movies/new'} passHref>
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

const MoviesPageCardListSuspense: FC<{
  searchCriteria: MoviesSearchCriteriaInput
  orderBy: Option<MovieOrderByWithRelationAndSearchRelevanceInput>
  pagination: IClientSideOffsetPagination
  setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>
  paginationResult: IClientSideOffsetPaginationResult
}> = ({
  searchCriteria,
  orderBy,
  pagination,
  setPagination,
  paginationResult
}) => {
  const { data } = useSearchMoviesSuspenseQuery({
    variables: {
      searchCriteria,
      orderBy: isSome(orderBy) ? [orderBy] : [],
      take: pagination.pageSize
    },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalCount: data?.searchMovies.length
    }))
  }, [data])

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <MovieCardList
        movies={data?.searchMovies.slice(
          paginationResult.startIndex,
          paginationResult.endIndex
        )}
      />
    </div>
  )
}
