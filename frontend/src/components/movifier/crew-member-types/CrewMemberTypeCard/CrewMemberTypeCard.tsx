import { gql } from '@apollo/client'
import { CrewMemberTypeCardItemFragment } from '@/lib'
import { useIsAdmin } from '@/lib/hooks/CurrentUser'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { AppTooltip } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'
import { FilePenLine } from 'lucide-react'
import * as React from 'react'
import { DeleteMovieCrewMemberTypeButton } from '@/components/movifier/crew-member-types/CrewMemberTypeCard/DeleteMovieCrewMemberTypeButton'

const CrewMemberTypeCardFragment = gql`
  fragment CrewMemberTypeCardItem on MovieCrewMemberType {
    id
    name

    _count {
      movieCrewMembers
    }
  }
`

export function MovieCrewMemberTypeCard(
  crewMemberType: CrewMemberTypeCardItemFragment
) {
  const isAdmin = useIsAdmin()

  return (
    <Card className={'min-w-[10em]'}>
      <CardHeader>
        <CardTitle>{crewMemberType.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{crewMemberType._count?.movieCrewMembers} crew members</p>
      </CardContent>

      <CardFooter className={'flex flex-col justify-start items-start gap-5'}>
        {isAdmin && (
          <div className={'grid grid-cols-2 mx-auto gap-5'}>
            <AppTooltip text={'Edit movie crew member type'}>
              <Link
                href={`/movies/crew-member-types/${crewMemberType.id}/edit`}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <FilePenLine />
              </Link>
            </AppTooltip>

            <AppTooltip text={'Delete movie crew member type'}>
              <DeleteMovieCrewMemberTypeButton id={crewMemberType.id} />
            </AppTooltip>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
