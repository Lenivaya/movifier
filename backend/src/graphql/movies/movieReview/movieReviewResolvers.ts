import { NonEmptyArray } from 'type-graphql'
import {
  AggregateMovieReviewLikedByUserResolver,
  GroupByMovieReviewLikedByUserResolver,
  GroupByMovieReviewResolver,
  MovieReviewCrudResolver,
  MovieReviewRelationsResolver
} from '@/generated/type-graphql'
import { movieReviewLikesResolvers } from '@/graphql/movies/movieReviewLikes/movieReviewLikesResolvers'

export const movieReviewResolvers: NonEmptyArray<Function> = [
  MovieReviewCrudResolver,
  MovieReviewRelationsResolver,
  GroupByMovieReviewResolver,
  GroupByMovieReviewLikedByUserResolver
]
