import { gql } from '@apollo/client'

export const UNMARK_MOVIE_WATCHED = gql`
  mutation UnmarkMovieWatched($movieId: String!, $userId: String!) {
    deleteOneMovieWatchedByUser(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      movieId
    }
  }
`
