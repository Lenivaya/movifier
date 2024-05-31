import { gql } from '@apollo/client'

export const IS_MOVIE_IN_USER_WATCHLIST = gql`
  query IsMovieInUserWatchlist($movieId: String!, $userId: String!) {
    userMovieWatchlist(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      movieId
      userId
    }
  }
`
