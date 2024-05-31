'use client'

import { SearchBar } from '@/components/movifier/generic/search'
import { gql } from '@apollo/client'
import { useMutative } from 'use-mutative'
import { FC, Suspense } from 'react'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { AppLoader } from '@/components/movifier/generic'
import { MoviesSearchCriteriaInput, useSearchMoviesSuspenseQuery } from '@/lib'

export const SearchMovies = gql`
  query SearchMovies($searchCriteria: MoviesSearchCriteriaInput!) {
    searchMovies(take: 5, searchCriteria: $searchCriteria) {
      ...MovieCardItem
    }
  }
`

export default function MoviesPage() {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MoviesSearchCriteriaInput>({
      search: ''
    })

  const criteriaChanger =
    (field: keyof MoviesSearchCriteriaInput) => (value: string) =>
      setSearchCriteria((prev) => ({ [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie'
        />
      </div>

      <div className='w-full mx-auto my-auto min-h-[90vh] flex justify-center pb-5'>
        <Suspense fallback={<AppLoader />}>
          <ParcelsPageCardListSuspense searchCriteria={searchCriteria} />
        </Suspense>
      </div>
    </main>
  )
}

const ParcelsPageCardListSuspense: FC<{
  searchCriteria: MoviesSearchCriteriaInput
}> = ({ searchCriteria }) => {
  const { data } = useSearchMoviesSuspenseQuery({
    variables: {
      searchCriteria
    },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <MovieCardList movies={data?.searchMovies} />
    </div>
  )
}
