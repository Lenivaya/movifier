import { MovieListCardItemFragment } from '@/lib'
import { MovieListCard } from '@/components/movifier/movie-lists/MovieListCard/MovieListCard'
import React from 'react'

export function MovieListCardList({
  movieLists = []
}: {
  movieLists?: MovieListCardItemFragment[]
}) {
  return (
    <div className={'flex flex-col w-full h-full justify-center max-w-5xl'}>
      <div
        className={
          'flex flex-row flex-shrink flex-wrap justify-center content-center items-center gap-10'
        }
      >
        {movieLists.map((movieList) => (
          <div key={movieList.id} className='w-min min-h-full'>
            <MovieListCard key={movieList.id} {...movieList} />
          </div>
        ))}
      </div>
    </div>
  )
}
