import { NonEmptyArray } from 'type-graphql'
import { MovieRatingRelationsResolver } from '@/generated/type-graphql'
import { CustomMovieRatingCrudResolver } from '@/graphql/movies/movieRating/customMovieRatingCrudResolver'

export const movieRatingResolvers: NonEmptyArray<Function> = [
  CustomMovieRatingCrudResolver,
  MovieRatingRelationsResolver
]
