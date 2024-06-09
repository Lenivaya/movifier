import { FC } from 'react'
import { useGetMovieCrewMemberTypeForUpdateQuery } from '@/lib'
import { gql } from '@apollo/client'
import { MovieCrewMemberTypeCreateForm } from '@/components/movifier/crew-member-types/forms/MovieCrewMemberTypeCreateForm'

const GetMovieCrewMemberTypeForUpdate = gql`
  query GetMovieCrewMemberTypeForUpdate($id: String!) {
    movieCrewMemberType(where: { id: $id }) {
      id
      name
    }
  }
`
export const MovieCrewMemberTypeUpdateForm: FC<{
  movieCrewMemberTypeId: string
}> = ({ movieCrewMemberTypeId }) => {
  const { data } = useGetMovieCrewMemberTypeForUpdateQuery({
    variables: { id: movieCrewMemberTypeId },
    fetchPolicy: 'network-only'
  })

  return MovieCrewMemberTypeCreateForm({
    movieCrewMemberTypeToUpdate: data?.movieCrewMemberType
  })
}
