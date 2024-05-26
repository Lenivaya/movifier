import { NonEmptyArray } from 'type-graphql'
import {
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver
} from '@/generated/type-graphql'

export const movieRatingResolvers: NonEmptyArray<Function> = [
  // MovieRatingCrudResolver,
  MovieRatingRelationsResolver
]
