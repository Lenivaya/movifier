import { NonEmptyArray } from 'type-graphql'
import {
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrudResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver,
  MovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver,
  UserMovieWatchlistCrudResolver,
  UserMovieWatchlistRelationsResolver
} from '@/generated/type-graphql'
import { CustomMoviesResolver } from '@/graphql/movies/customMoviesResolver'
import { CustomMoviesTmdbResolver } from '@/graphql/movies/moviesTmdbFetcher/customMoviesTmdbResolver'

export const moviesResolvers: NonEmptyArray<Function> = [
  CustomMoviesResolver,
  CustomMoviesTmdbResolver,
  MovieCrudResolver,
  MovieRelationsResolver,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver,
  UserMovieWatchlistCrudResolver,
  UserMovieWatchlistRelationsResolver
]
