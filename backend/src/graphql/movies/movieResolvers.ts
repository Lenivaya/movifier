import { NonEmptyArray } from 'type-graphql'
import {
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrudResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver,
  MovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver
} from '@/generated/type-graphql'

export const moviesResolvers: NonEmptyArray<Function> = [
  MovieCrudResolver,
  MovieRelationsResolver,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver
]
