'use client'

import Image from 'next/image'
import { gql } from '@apollo/client'
import { FC, Suspense } from 'react'
import { useGetMoviesForHomePageSuspenseQuery } from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { Loader } from '@/components/movifier/generic'

const GET_MOVIES_FOR_HOME_PAGE = gql`
  query GetMoviesForHomePage {
    movies {
      ...MovieCardItem
    }
  }
`

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 w-full text-center'>
        <Suspense fallback={<Loader />}>
          <MoviesListSuspense />
        </Suspense>
      </div>
    </main>
  )
}

const MoviesListSuspense: FC = () => {
  const { data } = useGetMoviesForHomePageSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })

  return <MovieCardList movies={data.movies} />
}
