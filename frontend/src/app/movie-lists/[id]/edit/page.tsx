'use client'

import { MovieListUpdateForm } from '@/components/movifier/movie-lists/forms/MovieListCreateForm/MovieListUpdateForm'

export default function EditMovieListPage({
  params
}: {
  params: { id: string }
}) {
  return (
    <main className={'p-10'}>
      <MovieListUpdateForm movieListId={params.id} />
    </main>
  )
}
