import { gql } from '@apollo/client'
import { FC } from 'react'
import { useGetMovieForUpdateQuery } from '@/lib'
import MovieCreateForm from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateForm'

const GetMovieForUpdate = gql`
  query GetMovieForUpdate($id: String!) {
    movie(where: { id: $id }) {
      id

      movieInfo {
        id
        imdbId
        title
        description
        posterUrl
        alternativeTitles
        releaseDate
        durationInMinutes
      }

      spokenLanguages {
        iso_639_1
      }
      genres {
        id
      }
      studios {
        id
      }
      crewMembers {
        crewMember {
          id
        }
        movieCrewMemberType {
          id
          name
        }
      }
    }
  }
`

export const MovieUpdateForm: FC<{ movieId: string }> = ({ movieId }) => {
  const { data } = useGetMovieForUpdateQuery({
    variables: { id: movieId },
    fetchPolicy: 'network-only'
  })

  return MovieCreateForm({ movieToUpdate: data?.movie })
}
