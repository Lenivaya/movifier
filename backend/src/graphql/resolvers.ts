import { NonEmptyArray } from 'type-graphql'
import { moviesResolvers } from '@/graphql/movies/movieResolvers'
import { ResolversEnhanceMap } from '@/generated/type-graphql'
import { userResolvers } from '@/graphql/users/userResolvers'
import { movieRatingResolvers } from '@/graphql/movies/movieRating/movieRatingResolvers'
import { movieReviewResolvers } from '@/graphql/movies/movieReview/movieReviewResolvers'
import { movieLikesResolvers } from '@/graphql/movies/movieLikes/movieLikesResolvers'
import { movieReviewLikesResolvers } from '@/graphql/movies/movieReviewLikes/movieReviewLikesResolvers'
import { genresResolvers } from '@/graphql/genres/genreResolvers'

export const resolvers: NonEmptyArray<Function> = [
  ...moviesResolvers,
  ...movieRatingResolvers,
  ...movieReviewResolvers,
  ...movieLikesResolvers,
  ...movieReviewLikesResolvers,
  ...userResolvers,
  ...genresResolvers
]

export const resolversEnhanceMap: ResolversEnhanceMap = {}
