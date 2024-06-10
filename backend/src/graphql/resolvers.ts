import { Authorized, NonEmptyArray } from 'type-graphql'
import { moviesResolvers } from '@/graphql/movies/movieResolvers'
import { ResolversEnhanceMap } from '@/generated/type-graphql'
import { userResolvers } from '@/graphql/users/userResolvers'
import {
  movieRatingActionsConfig,
  movieRatingResolvers
} from '@/graphql/movies/movieRating/movieRatingResolvers'
import {
  movieReviewActionsConfig,
  movieReviewResolvers
} from '@/graphql/movies/movieReview/movieReviewResolvers'
import {
  movieLikesActionsConfig,
  movieLikesResolvers
} from '@/graphql/movies/movieLikes/movieLikesResolvers'
import { movieReviewLikesResolvers } from '@/graphql/movies/movieReviewLikes/movieReviewLikesResolvers'
import { genresResolvers } from '@/graphql/genres/genreResolvers'
import { isAuthenticated } from '@/graphql/auth/rules/isAuthenticated'
import { isAdmin } from '@/graphql/auth/rules/isAdmin'

export const resolvers: NonEmptyArray<Function> = [
  ...moviesResolvers,
  ...movieRatingResolvers,
  ...movieReviewResolvers,
  ...movieLikesResolvers,
  ...movieReviewLikesResolvers,
  ...userResolvers,
  ...genresResolvers
]

export const resolversEnhanceMap: ResolversEnhanceMap = {
  Movie: {
    createManyMovie: [Authorized([isAuthenticated, isAdmin])],
    createOneMovie: [Authorized([isAuthenticated, isAdmin])],
    updateOneMovie: [Authorized([isAuthenticated, isAdmin])],
    updateManyMovie: [Authorized([isAuthenticated, isAdmin])],
    upsertOneMovie: [Authorized([isAuthenticated, isAdmin])],
    deleteOneMovie: [Authorized([isAuthenticated, isAdmin])],
    deleteManyMovie: [Authorized([isAuthenticated, isAdmin])]
  },
  Genre: {
    createManyGenre: [Authorized([isAuthenticated, isAdmin])],
    createOneGenre: [Authorized([isAuthenticated, isAdmin])],
    updateOneGenre: [Authorized([isAuthenticated, isAdmin])],
    updateManyGenre: [Authorized([isAuthenticated, isAdmin])],
    upsertOneGenre: [Authorized([isAuthenticated, isAdmin])],
    deleteOneGenre: [Authorized([isAuthenticated, isAdmin])],
    deleteManyGenre: [Authorized([isAuthenticated, isAdmin])]
  },
  MovieCrewMemberType: {
    createManyMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    createOneMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    updateOneMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    updateManyMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    upsertOneMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    deleteOneMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])],
    deleteManyMovieCrewMemberType: [Authorized([isAuthenticated, isAdmin])]
  },
  MovieCrewMember: {
    createManyMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    createOneMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    updateOneMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    updateManyMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    upsertOneMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    deleteOneMovieCrewMember: [Authorized([isAuthenticated, isAdmin])],
    deleteManyMovieCrewMember: [Authorized([isAuthenticated, isAdmin])]
  },
  MovieSpokenLanguage: {
    createManyMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    createOneMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    updateOneMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    updateManyMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    upsertOneMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    deleteOneMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])],
    deleteManyMovieSpokenLanguage: [Authorized([isAuthenticated, isAdmin])]
  },
  MovieRating: movieRatingActionsConfig,
  MovieReview: movieReviewActionsConfig,
  MovieLikedByUser: movieLikesActionsConfig
}
