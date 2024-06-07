import { gql } from '@apollo/client'

export const MARK_MOVIE_LIST_LIKED = gql`
  mutation MarkMovieListLiked($movieListId: String!, $userId: String!) {
    createOneMovieListLikedByUser(
      data: {
        movieList: { connect: { id: $movieListId } }
        user: { connect: { id: $userId } }
      }
    ) {
      movieListId
    }
  }
`
