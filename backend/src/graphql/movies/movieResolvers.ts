import { NonEmptyArray } from 'type-graphql'
import {
  MovieCrewMemberCrudResolver,
  MovieCrewMemberOnMovieRelationsResolver,
  MovieCrewMemberRelationsResolver,
  MovieCrewMemberTypeCrudResolver,
  MovieCrewMemberTypeRelationsResolver,
  MovieCrudResolver,
  MovieListCommentCrudResolver,
  MovieListCommentRelationsResolver,
  MovieListCrudResolver,
  MovieListLikedByUserCrudResolver,
  MovieListLikedByUserRelationsResolver,
  MovieListRelationsResolver,
  MovieRelationsResolver,
  MovieSpokenLanguageCrudResolver,
  MovieSpokenLanguageRelationsResolver,
  MovieStudioCrudResolver,
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
  UserMovieWatchlistCrudResolver,
  UserMovieWatchlistRelationsResolver,
  MovieListCrudResolver,
  MovieListRelationsResolver,
  MovieListCommentCrudResolver,
  MovieListCommentRelationsResolver,
  MovieSpokenLanguageCrudResolver,
  MovieSpokenLanguageRelationsResolver,
  MovieCrewMemberCrudResolver,
  MovieCrewMemberRelationsResolver,
  MovieListLikedByUserCrudResolver,
  MovieListLikedByUserRelationsResolver,
  MovieCrewMemberTypeCrudResolver,
  MovieCrewMemberTypeRelationsResolver,
  MovieStudioCrudResolver,
  MovieRelationsResolver
]
