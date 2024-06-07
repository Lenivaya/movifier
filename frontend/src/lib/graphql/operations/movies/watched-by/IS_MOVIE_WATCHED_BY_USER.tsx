import { gql } from '@apollo/client'

export const IS_MOVIE_WATCHED_BY_USER = gql`
  query IsMovieWatchedByUser($movieId: String!, $userId: String!) {
    movieWatchedByUser(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      movieId
    }
  }
`
