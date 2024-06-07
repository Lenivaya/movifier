import { gql } from '@apollo/client'

export const UNMARK_MOVIE_LIKED = gql`
  mutation UnmarkMovieLiked($movieId: String!, $userId: String!) {
    deleteOneMovieLikedByUser(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      createdAt
    }
  }
`
