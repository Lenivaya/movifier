'use client'

import { gql } from '@apollo/client'
import { useMovieListsSuspenseQuery } from '@/lib'
import { MovieListCard } from '@/components/movifier/movie-lists/MovieListCard/MovieListCard'

const MovieListsQuery = gql`
  query MovieLists {
    movieLists {
      ...MovieListCardItem
    }
  }
`

export default function MovieLists() {
  const { data } = useMovieListsSuspenseQuery()

  return (
    <main className={'p-5'}>
      <div className={'flex flex-row flex-wrap justify-center'}>
        {data?.movieLists.map((movieList) => (
          <MovieListCard key={movieList.id} {...movieList} />
        ))}
      </div>
    </main>
  )
}
