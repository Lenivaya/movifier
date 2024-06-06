'use client'

import { gql } from '@apollo/client'
import {
  MovieListSearchCriteriaInput,
  useSearchMovieListsSuspenseQuery
} from '@/lib'
import { MovieListCard } from '@/components/movifier/movie-lists/MovieListCard/MovieListCard'
import { useMutative } from 'use-mutative'
import { FC, Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { SearchBar } from '@/components/movifier/generic/search'
import { motion } from 'framer-motion'
import { PlusCircledIcon, PlusIcon } from '@radix-ui/react-icons'
import { Link } from 'next-view-transitions'

const SearchMovieLists = gql`
  query SearchMovieLists($searchCriteria: MovieListSearchCriteriaInput!) {
    searchMovieLists(take: 5, searchCriteria: $searchCriteria) {
      ...MovieListCardItem
    }
  }
`

export default function MovieLists() {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MovieListSearchCriteriaInput>({
      search: ''
    })

  const criteriaChanger =
    (field: keyof MovieListSearchCriteriaInput) => (value: string) =>
      setSearchCriteria((prev) => ({ [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie list'
        />
      </div>

      <Suspense fallback={<AppLoader />}>
        <MovieListPageCardListSuspense searchCriteria={searchCriteria} />
      </Suspense>

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

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <div
        className={
          'flex flex-row flex-shrink flex-wrap justify-center items-stretch gap-10'
        }
      >
        {data?.searchMovieLists.map((movieList) => (
          <div key={movieList.id} className='flex-1 min-h-full'>
            <MovieListCard key={movieList.id} {...movieList} />
          </div>
        ))}
      </div>
    </div>
  )
}
