import { FC } from 'react'
import { useGetMovieGenreForUpdateQuery } from '@/lib'
import { gql } from '@apollo/client'
import { MovieGenreCreateForm } from '@/components/movifier/genres/forms/MovieGenreCreateForm'

const GetMovieGenreForUpdate = gql`
  query GetMovieGenreForUpdate($id: String!) {
    genre(where: { id: $id }) {
      id
      name
    }
  }
`
export const MovieGenreUpdateForm: FC<{ movieGenreId: string }> = ({
  movieCrewMemberTypeId
}) => {
  const { data } = useGetMovieGenreForUpdateQuery({
    variables: { id: movieCrewMemberTypeId },
    fetchPolicy: 'network-only'
  })

  return MovieGenreCreateForm({ movieGenreToUpdate: data?.genre })
}
