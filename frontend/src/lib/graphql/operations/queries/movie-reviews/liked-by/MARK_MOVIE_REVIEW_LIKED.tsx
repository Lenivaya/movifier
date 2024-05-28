import { gql } from '@apollo/client'

export const MARK_MOVIE_REVIEW_LIKED = gql`
  mutation MarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
    createOneMovieReviewLikedByUser(
      data: {
        movieReview: { connect: { id: $movieReviewId } }
        user: { connect: { id: $userId } }
      }
    ) {
      createdAt
    }
  }
`
