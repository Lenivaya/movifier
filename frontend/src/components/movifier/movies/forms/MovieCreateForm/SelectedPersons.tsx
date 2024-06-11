import { MoviePersonsSelection } from '@/components/movifier/movies/forms/MovieCreateForm/types'
import { Updater } from 'use-mutative'
import { useGetSelectedPersonsQuery } from '@/lib'
import { PersonCard } from '@/components/movifier/persons/PersonCard/PersonCard'
import { Badge } from '@/components/ui/badge'
import { AddRoleForPersonButtonDialog } from '@/components/movifier/movies/forms/MovieCreateForm/AddRoleForPersonButtonDialog'
import { Button } from '@/components/ui'
import { Minus } from 'lucide-react'
import React from 'react'

export function SelectedPersons({
  crewMembers,
  setCrewMembers
}: {
  crewMembers: MoviePersonsSelection[]
  setCrewMembers: Updater<MoviePersonsSelection[]>
}) {
  const { data } = useGetSelectedPersonsQuery({
    variables: { selectedIds: crewMembers.map((x) => x.movieCrewMemberId) },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex w-full flex-grow flex-row flex-wrap justify-center gap-5'>
      {data?.movieCrewMembers.map((person) => {
        const crewMember = crewMembers.find(
          ({ movieCrewMemberId }) => movieCrewMemberId === person.id
        )

        return (
          <div
            key={person.id}
            className={'flex flex-col justify-center gap-3 items-center '}
          >
            <PersonCard {...person} />

            <div className='flex flex-row flex-wrap w-full gap-3'>
              {crewMember?.personOnMovieRoles.map((role) => {
                const isRoleSelected = crewMember.personOnMovieRoles?.some(
                  (someRole) => someRole.id === role.id
                )

                return (
                  <Badge
                    className={'flex-grow'}
                    key={role.id}
                    onClick={() => {
                      if (!isRoleSelected) return

                      setCrewMembers((draft) => {
                        const crewMember = draft.find(
                          ({ movieCrewMemberId }) =>
                            movieCrewMemberId === person.id
                        )
                        if (!crewMember) return draft
                        crewMember.personOnMovieRoles =
                          crewMember.personOnMovieRoles.filter(
                            (x) => x.id !== role.id
                          )
                      })
                    }}
                  >
                    <span className={'text-center mx-auto'}>{role.name}</span>
                  </Badge>
                )
              })}
            </div>

            <AddRoleForPersonButtonDialog
              crewMemberId={person.id}
              setCrewMembers={setCrewMembers}
            />

            <Button
              variant={'destructive'}
              className={'w-full'}
              onClick={(_) =>
                setCrewMembers((prev) =>
                  prev.filter(
                    ({ movieCrewMemberId }) => movieCrewMemberId !== person.id
                  )
                )
              }
            >
              <Minus />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
