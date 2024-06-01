import { gql } from '@apollo/client'
import { FC } from 'react'
import { DirectorNamesTitleItemFragment } from '@/lib'
import { Link } from 'next-view-transitions'

export const DirectorNamesTitleFragment = gql`
  fragment DirectorNamesTitleItem on Movie {
    crewMembers(
      orderBy: [{ crewMember: { popularity: desc } }, { order: asc }]
    ) {
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

  const isMoreThanOneDirector = directors?.length > 1

  return (
    <p>
      Directed by{' '}
      {directors?.map((director, index) => {
        const isLast = index === directors?.length - 1

        return (
          <Link
            href={`/person/${director.crewMember?.id}`}
            key={director.crewMember.name}
          >
            <span className={'font-semibold underline underline-offset-2'}>
              {director.crewMember?.name}
              {isMoreThanOneDirector && !isLast ? ', ' : ''}
            </span>
          </Link>
        )
      })}
    </p>
  )
}
