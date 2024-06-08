import { NonEmptyArray } from 'type-graphql'
import {
  GroupByMovieReviewLikedByUserResolver,
  GroupByMovieReviewResolver,
  MovieReviewRelationsResolver
} from '@/generated/type-graphql'
import { CustomMovieReviewCrudResolver } from '@/graphql/movies/movieReview/customMovieReviewCrudResolver'

export const movieReviewResolvers: NonEmptyArray<Function> = [
  // MovieReviewCrudResolver,
  CustomMovieReviewCrudResolver,
  MovieReviewRelationsResolver,
  GroupByMovieReviewResolver,
  GroupByMovieReviewLikedByUserResolver
]
