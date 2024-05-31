import { gql } from '@apollo/client'

export const UNMARK_MOVIE_REVIEW_LIKED = gql`
  mutation UnmarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
    deleteOneMovieReviewLikedByUser(
      where: {
        userId_movieReviewId: { movieReviewId: $movieReviewId, userId: $userId }
      }
    ) {
      movieReviewId
    }
  }
`
