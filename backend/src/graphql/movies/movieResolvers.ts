import { NonEmptyArray } from 'type-graphql'
import {
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrudResolver,
  MovieListCrudResolver,
  MovieListRelationsResolver,
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
import { CustomMovieListResolver } from '@/graphql/movies/movieList/customMovieListResolver'

export const moviesResolvers: NonEmptyArray<Function> = [
  CustomMoviesResolver,
  CustomMoviesTmdbResolver,
  CustomMovieListResolver,
  MovieCrudResolver,
  MovieRelationsResolver,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieWatchedByUserCrudResolver,
  MovieWatchedByUserRelationsResolver,
  MovieRatingCrudResolver,
  MovieRatingRelationsResolver,
  UserMovieWatchlistCrudResolver,
  UserMovieWatchlistRelationsResolver,
  MovieListCrudResolver,
  MovieListRelationsResolver
]
