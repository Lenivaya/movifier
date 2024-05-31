import { gql } from '@apollo/client'

export const MARK_MOVIE_LIKED = gql`
  mutation MarkMovieLiked($movieId: String!, $userId: String!) {
    createOneMovieLikedByUser(
      data: {
        movie: { connect: { id: $movieId } }
        user: { connect: { id: $userId } }
      }
    ) {
      createdAt
    }
  }
`
