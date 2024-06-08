'use client'

import { gql } from '@apollo/client'
import { FC, Suspense } from 'react'
import { cn, useGetMoviesForHomePageSuspenseQuery } from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { AppLoader } from '@/components/movifier/generic'
import { Imbue } from 'next/font/google'
import { Separator } from '@/components/ui'

const imbue = Imbue({ subsets: ['latin'] })

const GET_MOVIES_FOR_HOME_PAGE = gql`
  query GetMoviesForHomePage {
    movies(orderBy: { movieInfo: { releaseDate: desc } }, take: 15) {
      ...MovieCardItem
    }
  }
`

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 w-full text-center'>
        <Suspense fallback={<AppLoader />}>
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

  return (
    <div className={'flex-col flex gap-7'}>
      <h1
        className={cn(
          'font-black font-serif text-4xl underline',
          imbue.className
        )}
      >
        Latest movie releases
      </h1>
      <Separator />
      <MovieCardList movies={data.movies} />
    </div>
  )
}
