import { FC } from 'react'
import { PersonCardItemFragment } from '@/lib'
import { PersonCard } from '@/components/movifier/persons/PersonCard/PersonCard'

export const PersonCardList: FC<{ persons: PersonCardItemFragment[] }> = ({
  persons
}) => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {persons.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  )
}
