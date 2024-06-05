'use client'

import { gql } from '@apollo/client'
import { Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { useGetMovieListForPageSuspenseQuery } from '@/lib'
import { MovieListPage } from '@/components/movifier/movie-lists/MovieListPage/MovieListPage'
import { isNone } from '@/lib/types'

const GetMovieLisForPage = gql`
  query GetMovieListForPage($id: String!) {
    movieList(where: { id: $id }) {
      ...MovieListPageItem
    }
  }
`

export default function OneMovieListPage({
  params
}: {
  params: { id: string }
}) {
  return (
    <main className={'p-10'}>
      <Suspense fallback={<AppLoader />}>
        <SuspenseMovieListPage id={params.id} />
      </Suspense>
    </main>
  )
}

function SuspenseMovieListPage({ id }: { id: string }) {
  const { data } = useGetMovieListForPageSuspenseQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })

  return isNone(data.movieList) || <MovieListPage {...data.movieList} />
}
