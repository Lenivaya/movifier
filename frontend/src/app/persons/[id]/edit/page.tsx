'use client'

import { PersonUpdateForm } from '@/components/movifier/persons/forms/PersonCreateForm/PersonCreateForm'

export default function EditPersonPage({ params }: { params: { id: string } }) {
  return (
    <main className={'p-10'}>
      <PersonUpdateForm personId={params.id} />
    </main>
  )
}
