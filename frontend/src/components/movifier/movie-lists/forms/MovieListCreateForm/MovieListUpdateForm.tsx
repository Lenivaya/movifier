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
  movieGenreId
}) => {
  const { data } = useGetMovieListForUpdateQuery({
    variables: { id: movieGenreId },
    fetchPolicy: 'network-only'
  })

  return MovieListCreateForm({ movieListToUpdate: data?.movieList })
}
