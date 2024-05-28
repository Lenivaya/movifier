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
    <Suspense fallback={<AppLoader />}>
      <MoviePageSuspense id={params.id} />
    </Suspense>
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
