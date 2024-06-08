import React, { FC, Suspense } from 'react'
import {
  MovieListSearchCriteriaInput,
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

const SearchMovieLists = gql`
  query SearchMovieLists($searchCriteria: MovieListSearchCriteriaInput!) {
    searchMovieLists(take: 5, searchCriteria: $searchCriteria) {
      ...MovieListCardItem
    }
  }
`

export function MovieListsPage({
  showCreateButton = false,
  render = (searchCriteria: MovieListSearchCriteriaInput) => (
    <Suspense fallback={<AppLoader />}>
      <MovieListPageCardListSuspense searchCriteria={searchCriteria} />
    </Suspense>
  )
}: {
  showCreateButton?: boolean
  render?: (searchCriteria: MovieListSearchCriteriaInput) => React.ReactNode
}) {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MovieListSearchCriteriaInput>({
      search: ''
    })

  const criteriaChanger =
    (field: keyof MovieListSearchCriteriaInput) => (value: string) =>
      setSearchCriteria((prev) => ({ ...prev, [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie list'
        />
      </div>

      {render(searchCriteria)}

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
    </main>
  )
}

const MovieListPageCardListSuspense: FC<{
  searchCriteria: MovieListSearchCriteriaInput
}> = ({ searchCriteria }) => {
  const { data } = useSearchMovieListsSuspenseQuery({
    variables: {
      searchCriteria
    },
    fetchPolicy: 'cache-and-network'
  })

  return <MovieListCardList movieLists={data?.searchMovieLists} />
}
