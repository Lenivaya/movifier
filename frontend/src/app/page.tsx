'use client'

import { gql } from '@apollo/client'
import { FC, Suspense } from 'react'
import {
  cn,
  useGetMoviesForHomePageQuery,
  useGetMoviesForHomePageSuspenseQuery,
  useGetRecentMovieListsQuery
} from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { AppLoader } from '@/components/movifier/generic'
import { Imbue } from 'next/font/google'
import { Separator } from '@/components/ui'
import { MovieLists } from '@/app/user/dashboard/movie-lists/page'
import { MovieListCard } from '@/components/movifier/movie-lists/MovieListCard/MovieListCard'
import { MovieListCardList } from '@/components/movifier/movie-lists/MovieListCardList'

const imbue = Imbue({ subsets: ['latin'] })

const GET_MOVIES_FOR_HOME_PAGE = gql`
  query GetMoviesForHomePage {
    movies(orderBy: { movieInfo: { releaseDate: desc } }, take: 15) {
      ...MovieCardItem
    }
  }
`

const GET_RECENT_MOVIE_LISTS = gql`
  query GetRecentMovieLists {
    movieLists(orderBy: { createdAt: desc }, take: 5) {
      ...MovieListCardItem
    }
  }
`

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 w-full text-center flex flex-col gap-20'>
        <Suspense fallback={<AppLoader />}>
          <MoviesListSuspense />
        </Suspense>

        <RecentMovieLists />
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

function RecentMovieLists() {
  const { data } = useGetRecentMovieListsQuery({
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className={'flex-col flex gap-7 items-center'}>
      <h1
        className={cn(
          'font-black font-serif text-4xl underline',
          imbue.className
        )}
      >
        Latest movie lists
      </h1>
      <Separator />
      <MovieListCardList movieLists={data?.movieLists} />
    </div>
  )
}
