import { gql } from '@apollo/client'

export const REMOVE_MOVIE_FROM_WATCHLIST = gql`
  mutation RemoveMovieFromWatchlist($movieId: String!, $userId: String!) {
    deleteOneUserMovieWatchlist(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      movieId
      userId
    }
  }
`
