'use client'

import { MovieUpdateForm } from '@/components/movifier/movies/forms/MovieCreateForm/MovieUpdateForm'

export default function EditMoviePage({ params }: { params: { id: string } }) {
  return (
    <main className={'p-10'}>
      <MovieUpdateForm movieId={params.id} />
    </main>
  )
}
