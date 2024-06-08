import React, { FC } from 'react'
import { MovieCardItemFragment } from '@/lib'
import { MovieCard } from '@/components/movifier/movies/MovieCard'

export const MovieCardList: FC<{ movies: MovieCardItemFragment[] }> = ({
  movies
}) => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}
