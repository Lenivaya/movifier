import { NonEmptyArray } from 'type-graphql'
import {
  MovieReviewLikedByUserCrudResolver,
  MovieReviewLikedByUserRelationsResolver
} from '@/generated/type-graphql'

export const movieReviewLikesResolvers: NonEmptyArray<Function> = [
  MovieReviewLikedByUserCrudResolver,
  MovieReviewLikedByUserRelationsResolver
]
