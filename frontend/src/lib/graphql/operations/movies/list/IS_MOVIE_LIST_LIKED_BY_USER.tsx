import { gql } from '@apollo/client'

export const IS_MOVIE_LIST_LIKED_BY_USER = gql`
  query IsMovieListLikedByUser($movieListId: String!, $userId: String!) {
    movieListLikedByUser(
      where: {
        userId_movieListId: { movieListId: $movieListId, userId: $userId }
      }
    ) {
      movieListId
    }
  }
`
