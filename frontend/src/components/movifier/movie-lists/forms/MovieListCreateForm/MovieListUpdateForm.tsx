import { gql } from '@apollo/client'
import { FC } from 'react'
import { useGetMovieListForUpdateQuery } from '@/lib'
import { MovieListCreateForm } from '@/components/movifier/movie-lists/forms/MovieListCreateForm/MovieListCreateForm'

const GetMovieListForUpdate = gql`
  query GetMovieListForUpdate($id: String!) {
    movieList(where: { id: $id }) {
      id
      name
      description
      tags
      movies {
        id
      }
    }
  }
`

export const MovieListUpdateForm: FC<{ movieListId: string }> = ({
  movieListId
}) => {
  const { data } = useGetMovieListForUpdateQuery({
    variables: { id: movieListId },
    fetchPolicy: 'network-only'
  })

  return MovieListCreateForm({ movieListToUpdate: data?.movieList })
}
