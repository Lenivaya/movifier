import { gql } from '@apollo/client'

export const MARK_MOVIE_WATCHED = gql`
  mutation MarkMovieWatched($movieId: String!, $userId: String!) {
    createOneMovieWatchedByUser(
      data: {
        movie: { connect: { id: $movieId } }
        user: { connect: { id: $userId } }
      }
    ) {
      movieId
    }
  }
`
