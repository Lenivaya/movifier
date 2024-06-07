import { gql } from '@apollo/client'

export const UNMARK_MOVIE_LIST_LIKED = gql`
  mutation UnmarkMovieListLiked($movieListId: String!, $userId: String!) {
    deleteOneMovieListLikedByUser(
      where: {
        userId_movieListId: { movieListId: $movieListId, userId: $userId }
      }
    ) {
      movieListId
    }
  }
`
