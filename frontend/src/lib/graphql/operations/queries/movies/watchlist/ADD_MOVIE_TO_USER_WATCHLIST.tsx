import { gql } from '@apollo/client'

export const ADD_MOVIE_TO_USER_WATCHLIST = gql`
  mutation AddMovieToUserWatchlist($movieId: String!, $userId: String!) {
    createOneUserMovieWatchlist(
      data: {
        movie: { connect: { id: $movieId } }
        user: { connect: { id: $userId } }
      }
    ) {
      movieId
      userId
    }
  }
`
