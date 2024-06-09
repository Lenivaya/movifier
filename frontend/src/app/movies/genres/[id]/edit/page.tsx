'use client'

import { MovieGenreUpdateForm } from '@/components/movifier/genres/forms/MovieGenreUpdateForm'

export default function EditMovieGenrePage({
  params
}: {
  params: { id: string }
}) {
  return (
    <main className={'p-10'}>
      <MovieGenreUpdateForm movieGenreId={params.id} />
    </main>
  )
}
