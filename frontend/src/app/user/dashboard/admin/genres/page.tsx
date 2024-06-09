'use client'

import { gql } from '@apollo/client'

const GET_MOVIE_GENRES = gql`
  query GetMovieGenresForAdmin {
    genres {
      ...MovieGenreCardItem
    }
  }
`
