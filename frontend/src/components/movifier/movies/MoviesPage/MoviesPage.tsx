import React, { FC, Suspense } from 'react'
import {
  MovieOrderByWithRelationAndSearchRelevanceInput,
  MoviesSearchCriteriaInput,
  useSearchMoviesSuspenseQuery
} from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { gql } from '@apollo/client'
import { Updater, useMutative } from 'use-mutative'
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
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '@/components/ui'
import { Settings } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

const SearchMovies = gql`
  query SearchMovies(
    $searchCriteria: MoviesSearchCriteriaInput!
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
  ) {
    searchMovies(take: 5, searchCriteria: $searchCriteria, orderBy: $orderBy) {
      ...MovieCardItem
    }
  }
`

export function MoviesPage({
  initialSearchCriteria = {
    search: '',
    genre: null,
    decade: null,
    year: null,
    keyword: null,
    language: null
  },
  render = (searchCriteria, orderBy) => (
    <MoviesPageCardListSuspense
      searchCriteria={searchCriteria}
      orderBy={orderBy}
    />
  )
}: {
  initialSearchCriteria?: MoviesSearchCriteriaInput
  render?: (
    searchCriteria: MoviesSearchCriteriaInput,
    orderBy: Option<MovieOrderByWithRelationAndSearchRelevanceInput>
  ) => React.ReactNode
}) {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MoviesSearchCriteriaInput>(initialSearchCriteria)

  const [orderBy, setOrderBy] =
    useMutative<Option<MovieOrderByWithRelationAndSearchRelevanceInput>>(null)

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
        <MoviesPageOrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />
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
          {render(searchCriteria, orderBy)}
        </Suspense>
      </div>
    </main>
  )
}

const MoviesPageCardListSuspense: FC<{
  searchCriteria: MoviesSearchCriteriaInput
  orderBy: Option<MovieOrderByWithRelationAndSearchRelevanceInput>
}> = ({ searchCriteria, orderBy }) => {
  const { data } = useSearchMoviesSuspenseQuery({
    variables: {
      searchCriteria,
      orderBy: isSome(orderBy) ? [orderBy] : []
    },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <MovieCardList movies={data?.searchMovies} />
    </div>
  )
}
