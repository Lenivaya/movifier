import { gql } from '@apollo/client'

export const IS_MOVIE_LIKED_BY_USER = gql`
  query IsMovieLikedByUser($movieId: String!, $userId: String!) {
    movieLikedByUser(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      movieId
    }
  }
`
