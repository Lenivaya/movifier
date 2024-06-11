'use client'

import { MovieCrewMemberTypeUpdateForm } from '@/components/movifier/crew-member-types/forms/MovieCrewMemberTypeUpdateForm'

export default function EditMovieCrewMemberTypePage({
  params
}: {
  params: { id: string }
}) {
  return (
    <main className={'p-10'}>
      <MovieCrewMemberTypeUpdateForm movieCrewMemberTypeId={params.id} />
    </main>
  )
}
