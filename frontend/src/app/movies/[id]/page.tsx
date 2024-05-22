'use client'

import React, { FC, Suspense } from 'react'
import { gql } from '@apollo/client'
import { useGetMovieForPageSuspenseQuery } from '@/lib'
import { MoviePage } from '@/components/movifier/movies/MoviePage/MoviePage'
import { isNone } from '@/lib/types'
import { AppLoader } from '@/components/movifier/generic'

const GET_MOVIE_FOR_PAGE = gql`
  query GetMovieForPage($id: String!) {
    movie(where: { id: $id }) {
      ...MoviePageItem
    }
  }
`

export default function OneMoviePage({ params }: { params: { id: string } }) {
  return (
    <div
    // className={
    //   'p-5 min-h-svh max-lg:w-full w-5/6 mx-auto flex items-center justify-center'
    // }
    >
      <Suspense fallback={<AppLoader />}>
        <MoviePageSuspense id={params.id} />
      </Suspense>
    </div>
  )
}

const MoviePageSuspense: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetMovieForPageSuspenseQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })
  const movie = data?.movie

  return isNone(movie) || <MoviePage movie={movie} />
}
