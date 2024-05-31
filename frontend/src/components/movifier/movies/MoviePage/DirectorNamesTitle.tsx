import { gql } from '@apollo/client'
import { FC } from 'react'
import { DirectorNamesTitleItemFragment } from '@/lib'
import { Link } from 'next-view-transitions'

export const DirectorNamesTitleFragment = gql`
  fragment DirectorNamesTitleItem on Movie {
    crewMembers {
      movieCrewMemberType {
        id
        name
      }
      crewMember {
        name
        id
      }
    }
  }
`
export const DirectorNamesTitle: FC<DirectorNamesTitleItemFragment> = ({
  crewMembers
}) => {
  const directors = crewMembers?.filter(
    (member) => member.movieCrewMemberType?.name === 'Director'
  )

  return (
    <p>
      Directed by{' '}
      {directors?.map((director) => (
        <Link
          href={`/person/${director.crewMember?.id}`}
          key={director.crewMember.name}
        >
          <span className={'font-semibold underline underline-offset-2'}>
            {director.crewMember?.name}
          </span>
        </Link>
      ))}
    </p>
  )
}
