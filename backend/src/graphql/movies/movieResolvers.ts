import * as TypeGraphQL from 'type-graphql'
import { NonEmptyArray, Query, Resolver } from 'type-graphql'
import {
  FindUniqueMovieArgs,
  Movie,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrudResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver,
  MovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver
} from '@/generated/type-graphql'
import { GraphQLResolveInfo } from 'graphql/index'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'

export const moviesResolvers: NonEmptyArray<Function> = [
  MovieCrudResolver,
  MovieRelationsResolver,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver
]
