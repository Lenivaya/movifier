import { gql } from '@apollo/client'

export const IS_MOVIE_REVIEW_LIKED_BY_USER = gql`
  query IsMovieReviewLikedByUser($movieReviewId: String!, $userId: String!) {
    movieReviewLikedByUser(
      where: {
        userId_movieReviewId: { movieReviewId: $movieReviewId, userId: $userId }
      }
    ) {
      movieReviewId
    }
  }
`
