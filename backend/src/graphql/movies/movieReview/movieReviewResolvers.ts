import { NonEmptyArray } from 'type-graphql'
import {
  GroupByMovieReviewLikedByUserResolver,
  GroupByMovieReviewResolver,
  MovieReviewRelationsResolver,
  ResolverActionsConfig
} from '@/generated/type-graphql'
import { CustomMovieReviewCrudResolver } from '@/graphql/movies/movieReview/customMovieReviewCrudResolver'
import { reviewOneActionAuth } from '@/graphql/movies/movieReview/auth/reviewOneActionAuth'

export const movieReviewResolvers: NonEmptyArray<Function> = [
  CustomMovieReviewCrudResolver,
  MovieReviewRelationsResolver,
  GroupByMovieReviewResolver,
  GroupByMovieReviewLikedByUserResolver
]

export const movieReviewActionsConfig: ResolverActionsConfig<'MovieReview'> = {
  deleteOneMovieReview: [reviewOneActionAuth()],
  updateOneMovieReview: [reviewOneActionAuth()],
  upsertOneMovieReview: [reviewOneActionAuth(true)]
}
