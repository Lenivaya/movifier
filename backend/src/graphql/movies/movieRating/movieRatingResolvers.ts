import { NonEmptyArray } from 'type-graphql'
import {
  MovieRatingRelationsResolver,
  ResolverActionsConfig
} from '@/generated/type-graphql'
import { CustomMovieRatingCrudResolver } from '@/graphql/movies/movieRating/customMovieRatingCrudResolver'
import { ratingOneActionAuth } from '@/graphql/movies/movieRating/auth/ratingOneActionAuth'

export const movieRatingResolvers: NonEmptyArray<Function> = [
  CustomMovieRatingCrudResolver,
  MovieRatingRelationsResolver
]

export const movieRatingActionsConfig: ResolverActionsConfig<'MovieRating'> = {
  deleteOneMovieRating: [ratingOneActionAuth()],
  updateOneMovieRating: [ratingOneActionAuth()],
  upsertOneMovieRating: [ratingOneActionAuth(true)]
}
