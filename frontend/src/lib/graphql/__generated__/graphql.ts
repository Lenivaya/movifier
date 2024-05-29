import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateMovie = {
  __typename?: 'AggregateMovie';
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
};

export type AggregateMovieLikedByUser = {
  __typename?: 'AggregateMovieLikedByUser';
  _count?: Maybe<MovieLikedByUserCountAggregate>;
  _max?: Maybe<MovieLikedByUserMaxAggregate>;
  _min?: Maybe<MovieLikedByUserMinAggregate>;
};

export type AggregateMovieRating = {
  __typename?: 'AggregateMovieRating';
  _avg?: Maybe<MovieRatingAvgAggregate>;
  _count?: Maybe<MovieRatingCountAggregate>;
  _max?: Maybe<MovieRatingMaxAggregate>;
  _min?: Maybe<MovieRatingMinAggregate>;
  _sum?: Maybe<MovieRatingSumAggregate>;
};

export type AggregateMovieReview = {
  __typename?: 'AggregateMovieReview';
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
};

export type AggregateMovieReviewLikedByUser = {
  __typename?: 'AggregateMovieReviewLikedByUser';
  _count?: Maybe<MovieReviewLikedByUserCountAggregate>;
  _max?: Maybe<MovieReviewLikedByUserMaxAggregate>;
  _min?: Maybe<MovieReviewLikedByUserMinAggregate>;
};

export type AggregateMovieWatchedByUser = {
  __typename?: 'AggregateMovieWatchedByUser';
  _count?: Maybe<MovieWatchedByUserCountAggregate>;
  _max?: Maybe<MovieWatchedByUserMaxAggregate>;
  _min?: Maybe<MovieWatchedByUserMinAggregate>;
};

export type AggregateUserMovieWatchlist = {
  __typename?: 'AggregateUserMovieWatchlist';
  _count?: Maybe<UserMovieWatchlistCountAggregate>;
  _max?: Maybe<UserMovieWatchlistMaxAggregate>;
  _min?: Maybe<UserMovieWatchlistMinAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumMoviefireAppUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<MoviefireAppUserRole>;
};

export type EnumMoviefireAppUserRoleFilter = {
  equals?: InputMaybe<MoviefireAppUserRole>;
  in?: InputMaybe<Array<MoviefireAppUserRole>>;
  not?: InputMaybe<NestedEnumMoviefireAppUserRoleFilter>;
  notIn?: InputMaybe<Array<MoviefireAppUserRole>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Genre = {
  __typename?: 'Genre';
  _count?: Maybe<GenreCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GenreCount = {
  __typename?: 'GenreCount';
  movies: Scalars['Int']['output'];
};


export type GenreCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type GenreCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<GenreCreateWithoutMoviesInput>>;
};

export type GenreCreateOrConnectWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GenreListRelationFilter = {
  every?: InputMaybe<GenreWhereInput>;
  none?: InputMaybe<GenreWhereInput>;
  some?: InputMaybe<GenreWhereInput>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GenreOrderByRelevanceFieldEnum =
  | 'name';

export type GenreOrderByRelevanceInput = {
  fields: Array<GenreOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type GenreOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<GenreOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreScalarFieldEnum =
  | 'createdAt'
  | 'name'
  | 'updatedAt';

export type GenreScalarWhereInput = {
  AND?: InputMaybe<Array<GenreScalarWhereInput>>;
  NOT?: InputMaybe<Array<GenreScalarWhereInput>>;
  OR?: InputMaybe<Array<GenreScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GenreUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateManyWithWhereWithoutMoviesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<GenreCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<GenreWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GenreScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  set?: InputMaybe<Array<GenreWhereUniqueInput>>;
  update?: InputMaybe<Array<GenreUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<GenreUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<GenreUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
  data: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  update: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreWhereInput = {
  AND?: InputMaybe<Array<GenreWhereInput>>;
  NOT?: InputMaybe<Array<GenreWhereInput>>;
  OR?: InputMaybe<Array<GenreWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GenreWhereUniqueInput = {
  AND?: InputMaybe<Array<GenreWhereInput>>;
  NOT?: InputMaybe<Array<GenreWhereInput>>;
  OR?: InputMaybe<Array<GenreWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  crewMembers: Array<MovieCrewMemberOnMovie>;
  genres: Array<Genre>;
  id: Scalars['String']['output'];
  inWatchlistByUsers: Array<UserMovieWatchlist>;
  keywordCategories: Array<MovieKeywordCategory>;
  likedBy: Array<MovieLikedByUser>;
  movieInfo?: Maybe<MovieInfo>;
  movieLists: Array<MovieList>;
  movieStats?: Maybe<MovieStats>;
  ratedBy: Array<MovieRating>;
  spokenLanguages: Array<MovieSpokenLanguage>;
  studios: Array<MovieStudio>;
  updatedAt: Scalars['DateTimeISO']['output'];
  watchedBy: Array<MovieWatchedByUser>;
};


export type MovieCrewMembersArgs = {
  cursor?: InputMaybe<MovieCrewMemberOnMovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberOnMovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};


export type MovieGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type MovieInWatchlistByUsersArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MovieKeywordCategoriesArgs = {
  cursor?: InputMaybe<MovieKeywordCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieKeywordCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
};


export type MovieLikedByArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovieMovieInfoArgs = {
  where?: InputMaybe<MovieInfoWhereInput>;
};


export type MovieMovieListsArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovieMovieStatsArgs = {
  where?: InputMaybe<MovieStatsWhereInput>;
};


export type MovieRatedByArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovieSpokenLanguagesArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieSpokenLanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MovieStudiosArgs = {
  cursor?: InputMaybe<MovieStudioWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieStudioScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieStudioOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieStudioWhereInput>;
};


export type MovieWatchedByArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  crewMembers: Scalars['Int']['output'];
  genres: Scalars['Int']['output'];
  inWatchlistByUsers: Scalars['Int']['output'];
  keywordCategories: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
  movieLists: Scalars['Int']['output'];
  ratedBy: Scalars['Int']['output'];
  spokenLanguages: Scalars['Int']['output'];
  studios: Scalars['Int']['output'];
  watchedBy: Scalars['Int']['output'];
};


export type MovieCountCrewMembersArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};


export type MovieCountGenresArgs = {
  where?: InputMaybe<GenreWhereInput>;
};


export type MovieCountInWatchlistByUsersArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MovieCountKeywordCategoriesArgs = {
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
};


export type MovieCountLikedByArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovieCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovieCountRatedByArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovieCountSpokenLanguagesArgs = {
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MovieCountStudiosArgs = {
  where?: InputMaybe<MovieStudioWhereInput>;
};


export type MovieCountWatchedByArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieCountAggregate = {
  __typename?: 'MovieCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateNestedManyWithoutMovieListsInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutMovieListsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutMovieListsInput>>;
};

export type MovieCreateNestedOneWithoutInWatchlistByUsersInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutInWatchlistByUsersInput>;
  create?: InputMaybe<MovieCreateWithoutInWatchlistByUsersInput>;
};

export type MovieCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieCreateWithoutLikedByInput>;
};

export type MovieCreateNestedOneWithoutRatedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatedByInput>;
  create?: InputMaybe<MovieCreateWithoutRatedByInput>;
};

export type MovieCreateNestedOneWithoutWatchedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchedByInput>;
  create?: InputMaybe<MovieCreateWithoutWatchedByInput>;
};

export type MovieCreateOrConnectWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutLikedByInput = {
  create: MovieCreateWithoutLikedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutRatedByInput = {
  create: MovieCreateWithoutRatedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutWatchedByInput = {
  create: MovieCreateWithoutWatchedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutInWatchlistByUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutLikedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutMovieListsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutRatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutWatchedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMember = {
  __typename?: 'MovieCrewMember';
  _count?: Maybe<MovieCrewMemberCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieCrewMemberCount = {
  __typename?: 'MovieCrewMemberCount';
  movies: Scalars['Int']['output'];
};


export type MovieCrewMemberCountMoviesArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberCreateNestedOneWithoutMoviesInput = {
  connect?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<MovieCrewMemberCreateWithoutMoviesInput>;
};

export type MovieCrewMemberCreateOrConnectWithoutMoviesInput = {
  create: MovieCrewMemberCreateWithoutMoviesInput;
  where: MovieCrewMemberWhereUniqueInput;
};

export type MovieCrewMemberCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoUrl: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovie = {
  __typename?: 'MovieCrewMemberOnMovie';
  createdAt: Scalars['DateTimeISO']['output'];
  crewMember: MovieCrewMember;
  movie: Movie;
  movieCrewMemberId: Scalars['String']['output'];
  movieCrewMemberType: MovieCrewMemberType;
  movieCrewMemberTypeId: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieCrewMemberOnMovieCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieCrewMemberId: Scalars['String']['input'];
  movieCrewMemberTypeId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyMovieInputEnvelope = {
  data: Array<MovieCrewMemberOnMovieCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieInputEnvelope>;
};

export type MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMember: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  movieCrewMemberType: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieListRelationFilter = {
  every?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
  none?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
  some?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput = {
  movieCrewMemberId: Scalars['String']['input'];
  movieCrewMemberTypeId: Scalars['String']['input'];
  movieId: Scalars['String']['input'];
};

export type MovieCrewMemberOnMovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOnMovieOrderByRelevanceFieldEnum =
  | 'movieCrewMemberId'
  | 'movieCrewMemberTypeId'
  | 'movieId';

export type MovieCrewMemberOnMovieOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberOnMovieOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberOnMovieOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  crewMember?: InputMaybe<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieCrewMemberId?: InputMaybe<SortOrder>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>;
  movieCrewMemberTypeId?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOnMovieScalarFieldEnum =
  | 'createdAt'
  | 'movieCrewMemberId'
  | 'movieCrewMemberTypeId'
  | 'movieId'
  | 'updatedAt';

export type MovieCrewMemberOnMovieScalarWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOnMovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput = {
  data: MovieCrewMemberOnMovieUpdateManyMutationInput;
  where: MovieCrewMemberOnMovieScalarWhereInput;
};

export type MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMember?: InputMaybe<MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  update: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMember?: InputMaybe<MovieCrewMemberRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeRelationFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOnMovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMember?: InputMaybe<MovieCrewMemberRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeRelationFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  movieId_movieCrewMemberId_movieCrewMemberTypeId?: InputMaybe<MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOrderByRelevanceFieldEnum =
  | 'description'
  | 'id'
  | 'imdbId'
  | 'name'
  | 'photoUrl';

export type MovieCrewMemberOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberRelationFilter = {
  is?: InputMaybe<MovieCrewMemberWhereInput>;
  isNot?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberType = {
  __typename?: 'MovieCrewMemberType';
  _count?: Maybe<MovieCrewMemberTypeCount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MovieCrewMemberTypeCount = {
  __typename?: 'MovieCrewMemberTypeCount';
  movieCrewMembers: Scalars['Int']['output'];
};


export type MovieCrewMemberTypeCountMovieCrewMembersArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput = {
  connect?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput>;
  create?: InputMaybe<MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput>;
};

export type MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput = {
  create: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  where: MovieCrewMemberTypeWhereUniqueInput;
};

export type MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MovieCrewMemberTypeOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieCrewMemberTypeOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberTypeOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberTypeOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeRelationFilter = {
  is?: InputMaybe<MovieCrewMemberTypeWhereInput>;
  isNot?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput = {
  connect?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput>;
  create?: InputMaybe<MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput>;
  update?: InputMaybe<MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput>;
  upsert?: InputMaybe<MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput>;
};

export type MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput = {
  data: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput = {
  create: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  update: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  id?: InputMaybe<StringFilter>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieCrewMemberTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput = {
  connect?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<MovieCrewMemberCreateWithoutMoviesInput>;
  update?: InputMaybe<MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput>;
  upsert?: InputMaybe<MovieCrewMemberUpsertWithoutMoviesInput>;
};

export type MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput = {
  data: MovieCrewMemberUpdateWithoutMoviesInput;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberUpsertWithoutMoviesInput = {
  create: MovieCrewMemberCreateWithoutMoviesInput;
  update: MovieCrewMemberUpdateWithoutMoviesInput;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imdbId?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  photoUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  photoUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieGroupBy = {
  __typename?: 'MovieGroupBy';
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieInfo = {
  __typename?: 'MovieInfo';
  alternativeTitles: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  durationInMinutes: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  posterUrl: Scalars['String']['output'];
  releaseDate: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieInfoCreateNestedOneWithoutMovieInput = {
  connect?: InputMaybe<MovieInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieInfoCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieInfoCreateWithoutMovieInput>;
};

export type MovieInfoCreateOrConnectWithoutMovieInput = {
  create: MovieInfoCreateWithoutMovieInput;
  where: MovieInfoWhereUniqueInput;
};

export type MovieInfoCreateWithoutMovieInput = {
  alternativeTitles?: InputMaybe<MovieInfoCreatealternativeTitlesInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  durationInMinutes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  posterUrl: Scalars['String']['input'];
  releaseDate: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieInfoCreatealternativeTitlesInput = {
  set: Array<Scalars['String']['input']>;
};

export type MovieInfoNullableRelationFilter = {
  is?: InputMaybe<MovieInfoWhereInput>;
  isNot?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoOrderByRelevanceFieldEnum =
  | 'alternativeTitles'
  | 'description'
  | 'id'
  | 'imdbId'
  | 'movieId'
  | 'posterUrl'
  | 'title';

export type MovieInfoOrderByRelevanceInput = {
  fields: Array<MovieInfoOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieInfoOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieInfoOrderByRelevanceInput>;
  alternativeTitles?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationInMinutes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  posterUrl?: InputMaybe<SortOrder>;
  releaseDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieInfoUpdateOneWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieInfoCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieInfoCreateWithoutMovieInput>;
  delete?: InputMaybe<MovieInfoWhereInput>;
  disconnect?: InputMaybe<MovieInfoWhereInput>;
  update?: InputMaybe<MovieInfoUpdateToOneWithWhereWithoutMovieInput>;
  upsert?: InputMaybe<MovieInfoUpsertWithoutMovieInput>;
};

export type MovieInfoUpdateToOneWithWhereWithoutMovieInput = {
  data: MovieInfoUpdateWithoutMovieInput;
  where?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoUpdateWithoutMovieInput = {
  alternativeTitles?: InputMaybe<MovieInfoUpdatealternativeTitlesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  posterUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  releaseDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieInfoUpdatealternativeTitlesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MovieInfoUpsertWithoutMovieInput = {
  create: MovieInfoCreateWithoutMovieInput;
  update: MovieInfoUpdateWithoutMovieInput;
  where?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoWhereInput = {
  AND?: InputMaybe<Array<MovieInfoWhereInput>>;
  NOT?: InputMaybe<Array<MovieInfoWhereInput>>;
  OR?: InputMaybe<Array<MovieInfoWhereInput>>;
  alternativeTitles?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  durationInMinutes?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  imdbId?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  posterUrl?: InputMaybe<StringFilter>;
  releaseDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieInfoWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieInfoWhereInput>>;
  NOT?: InputMaybe<Array<MovieInfoWhereInput>>;
  OR?: InputMaybe<Array<MovieInfoWhereInput>>;
  alternativeTitles?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  durationInMinutes?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<Scalars['String']['input']>;
  posterUrl?: InputMaybe<StringFilter>;
  releaseDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieKeywordCategory = {
  __typename?: 'MovieKeywordCategory';
  _count?: Maybe<MovieKeywordCategoryCount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MovieKeywordCategoryCount = {
  __typename?: 'MovieKeywordCategoryCount';
  movies: Scalars['Int']['output'];
};


export type MovieKeywordCategoryCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieKeywordCategoryCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieKeywordCategoryCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieKeywordCategoryCreateWithoutMoviesInput>>;
};

export type MovieKeywordCategoryCreateOrConnectWithoutMoviesInput = {
  create: MovieKeywordCategoryCreateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryCreateWithoutMoviesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MovieKeywordCategoryListRelationFilter = {
  every?: InputMaybe<MovieKeywordCategoryWhereInput>;
  none?: InputMaybe<MovieKeywordCategoryWhereInput>;
  some?: InputMaybe<MovieKeywordCategoryWhereInput>;
};

export type MovieKeywordCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieKeywordCategoryOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieKeywordCategoryOrderByRelevanceInput = {
  fields: Array<MovieKeywordCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieKeywordCategoryOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type MovieKeywordCategoryScalarFieldEnum =
  | 'id'
  | 'name';

export type MovieKeywordCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieKeywordCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieKeywordCategoryUpdateManyMutationInput;
  where: MovieKeywordCategoryScalarWhereInput;
};

export type MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieKeywordCategoryCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieKeywordCategoryCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieKeywordCategoryUpdateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryUpdateWithoutMoviesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieKeywordCategoryCreateWithoutMoviesInput;
  update: MovieKeywordCategoryUpdateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryWhereInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  id?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieKeywordCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MovieLikedByUser = {
  __typename?: 'MovieLikedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieLikedByUserCountAggregate = {
  __typename?: 'MovieLikedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieLikedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutLikedByInput;
  user: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyMovieInputEnvelope = {
  data: Array<MovieLikedByUserCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieLikedByUserCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyMovieInputEnvelope>;
};

export type MovieLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieLikedByUserCreateOrConnectWithoutMovieInput = {
  create: MovieLikedByUserCreateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieLikedByUserCreateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutLikedByInput;
};

export type MovieLikedByUserGroupBy = {
  __typename?: 'MovieLikedByUserGroupBy';
  _count?: Maybe<MovieLikedByUserCountAggregate>;
  _max?: Maybe<MovieLikedByUserMaxAggregate>;
  _min?: Maybe<MovieLikedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieLikedByUserWhereInput>;
  none?: InputMaybe<MovieLikedByUserWhereInput>;
  some?: InputMaybe<MovieLikedByUserWhereInput>;
};

export type MovieLikedByUserMaxAggregate = {
  __typename?: 'MovieLikedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieLikedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserMinAggregate = {
  __typename?: 'MovieLikedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieLikedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type MovieLikedByUserOrderByRelevanceInput = {
  fields: Array<MovieLikedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieLikedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieLikedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieLikedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieLikedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieLikedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type MovieLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieLikedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieLikedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieLikedByUserUpdateManyWithWhereWithoutMovieInput = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where: MovieLikedByUserScalarWhereInput;
};

export type MovieLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where: MovieLikedByUserScalarWhereInput;
};

export type MovieLikedByUserUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieLikedByUserUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieLikedByUserUpdateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieLikedByUserUpdateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieLikedByUserCreateWithoutMovieInput;
  update: MovieLikedByUserUpdateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieLikedByUserCreateWithoutUserInput;
  update: MovieLikedByUserUpdateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieLikedByUserUserIdMovieIdCompoundUniqueInput>;
};

export type MovieList = {
  __typename?: 'MovieList';
  _count?: Maybe<MovieListCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type MovieListCommentCreateManyMovieListInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieListCommentCreateManyMovieListInputEnvelope = {
  data: Array<MovieListCommentCreateManyMovieListInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCommentCreateManyUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCommentCreateManyUserInputEnvelope = {
  data: Array<MovieListCommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCommentCreateNestedManyWithoutMovieListInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyMovieListInputEnvelope>;
};

export type MovieListCommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyUserInputEnvelope>;
};

export type MovieListCommentCreateOrConnectWithoutMovieListInput = {
  create: MovieListCommentCreateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentCreateOrConnectWithoutUserInput = {
  create: MovieListCommentCreateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentCreateWithoutMovieListInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
};

export type MovieListCommentCreateWithoutUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieList: MovieListCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCommentListRelationFilter = {
  every?: InputMaybe<MovieListCommentWhereInput>;
  none?: InputMaybe<MovieListCommentWhereInput>;
  some?: InputMaybe<MovieListCommentWhereInput>;
};

export type MovieListCommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListCommentScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListCommentUpdateManyWithWhereWithoutMovieListInput = {
  data: MovieListCommentUpdateManyMutationInput;
  where: MovieListCommentScalarWhereInput;
};

export type MovieListCommentUpdateManyWithWhereWithoutUserInput = {
  data: MovieListCommentUpdateManyMutationInput;
  where: MovieListCommentScalarWhereInput;
};

export type MovieListCommentUpdateManyWithoutMovieListNestedInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyMovieListInputEnvelope>;
  delete?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput>>;
  updateMany?: InputMaybe<Array<MovieListCommentUpdateManyWithWhereWithoutMovieListInput>>;
  upsert?: InputMaybe<Array<MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput>>;
};

export type MovieListCommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListCommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieListCommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieListCommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput = {
  data: MovieListCommentUpdateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieListCommentUpdateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpdateWithoutMovieListInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput>;
};

export type MovieListCommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput = {
  create: MovieListCommentCreateWithoutMovieListInput;
  update: MovieListCommentUpdateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieListCommentCreateWithoutUserInput;
  update: MovieListCommentUpdateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentWhereInput = {
  AND?: InputMaybe<Array<MovieListCommentWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCommentWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListCommentWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCount = {
  __typename?: 'MovieListCount';
  comments: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
  movies: Scalars['Int']['output'];
};


export type MovieListCountCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovieListCountLikedByArgs = {
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MovieListCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieListCreateManyMovieListAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateManyMovieListAuthorInputEnvelope = {
  data: Array<MovieListCreateManyMovieListAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCreateNestedManyWithoutMovieListAuthorInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMovieListAuthorInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMovieListAuthorInput>>;
  createMany?: InputMaybe<MovieListCreateManyMovieListAuthorInputEnvelope>;
};

export type MovieListCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMoviesInput>>;
};

export type MovieListCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutCommentsInput>;
};

export type MovieListCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieListCreateWithoutLikedByInput>;
};

export type MovieListCreateOrConnectWithoutCommentsInput = {
  create: MovieListCreateWithoutCommentsInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutLikedByInput = {
  create: MovieListCreateWithoutLikedByInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMovieListAuthorInput = {
  create: MovieListCreateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMoviesInput = {
  create: MovieListCreateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutLikedByInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMovieListAuthorInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMoviesInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreatetagsInput = {
  set: Array<Scalars['String']['input']>;
};

export type MovieListLikedByUserCreateManyMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieListLikedByUserCreateManyMovieListInputEnvelope = {
  data: Array<MovieListLikedByUserCreateManyMovieListInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieListId: Scalars['String']['input'];
};

export type MovieListLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieListLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListLikedByUserCreateNestedManyWithoutMovieListInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyMovieListInputEnvelope>;
};

export type MovieListLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieListLikedByUserCreateOrConnectWithoutMovieListInput = {
  create: MovieListLikedByUserCreateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieListLikedByUserCreateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserCreateWithoutMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
};

export type MovieListLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieList: MovieListCreateNestedOneWithoutLikedByInput;
};

export type MovieListLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieListLikedByUserWhereInput>;
  none?: InputMaybe<MovieListLikedByUserWhereInput>;
  some?: InputMaybe<MovieListLikedByUserWhereInput>;
};

export type MovieListLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieListId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput = {
  data: MovieListLikedByUserUpdateManyMutationInput;
  where: MovieListLikedByUserScalarWhereInput;
};

export type MovieListLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieListLikedByUserUpdateManyMutationInput;
  where: MovieListLikedByUserScalarWhereInput;
};

export type MovieListLikedByUserUpdateManyWithoutMovieListNestedInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyMovieListInputEnvelope>;
  delete?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput>>;
  updateMany?: InputMaybe<Array<MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput>>;
  upsert?: InputMaybe<Array<MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput>>;
};

export type MovieListLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieListLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput = {
  data: MovieListLikedByUserUpdateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieListLikedByUserUpdateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpdateWithoutMovieListInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput>;
};

export type MovieListLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput = {
  create: MovieListLikedByUserCreateWithoutMovieListInput;
  update: MovieListLikedByUserUpdateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieListLikedByUserCreateWithoutUserInput;
  update: MovieListLikedByUserUpdateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput = {
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieListLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieListId?: InputMaybe<MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput>;
};

export type MovieListListRelationFilter = {
  every?: InputMaybe<MovieListWhereInput>;
  none?: InputMaybe<MovieListWhereInput>;
  some?: InputMaybe<MovieListWhereInput>;
};

export type MovieListOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListOrderByRelevanceFieldEnum =
  | 'description'
  | 'id'
  | 'name'
  | 'tags'
  | 'userId';

export type MovieListOrderByRelevanceInput = {
  fields: Array<MovieListOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieListOrderByRelevanceInput>;
  comments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedBy?: InputMaybe<MovieListLikedByUserOrderByRelationAggregateInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  stats?: InputMaybe<MovieListStatsOrderByWithRelationAndSearchRelevanceInput>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListRelationFilter = {
  is?: InputMaybe<MovieListWhereInput>;
  isNot?: InputMaybe<MovieListWhereInput>;
};

export type MovieListScalarFieldEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'name'
  | 'tags'
  | 'updatedAt'
  | 'userId';

export type MovieListScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListStatsCreateNestedOneWithoutMovieListInput = {
  connect?: InputMaybe<MovieListStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListStatsCreateOrConnectWithoutMovieListInput>;
  create?: InputMaybe<MovieListStatsCreateWithoutMovieListInput>;
};

export type MovieListStatsCreateOrConnectWithoutMovieListInput = {
  create: MovieListStatsCreateWithoutMovieListInput;
  where: MovieListStatsWhereUniqueInput;
};

export type MovieListStatsCreateWithoutMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likes: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views: Scalars['Int']['input'];
};

export type MovieListStatsNullableRelationFilter = {
  is?: InputMaybe<MovieListStatsWhereInput>;
  isNot?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieListId';

export type MovieListStatsOrderByRelevanceInput = {
  fields: Array<MovieListStatsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListStatsOrderByWithRelationAndSearchRelevanceInput = {
  MovieList?: InputMaybe<MovieListOrderByWithRelationAndSearchRelevanceInput>;
  _relevance?: InputMaybe<MovieListStatsOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type MovieListStatsUpdateOneWithoutMovieListNestedInput = {
  connect?: InputMaybe<MovieListStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListStatsCreateOrConnectWithoutMovieListInput>;
  create?: InputMaybe<MovieListStatsCreateWithoutMovieListInput>;
  delete?: InputMaybe<MovieListStatsWhereInput>;
  disconnect?: InputMaybe<MovieListStatsWhereInput>;
  update?: InputMaybe<MovieListStatsUpdateToOneWithWhereWithoutMovieListInput>;
  upsert?: InputMaybe<MovieListStatsUpsertWithoutMovieListInput>;
};

export type MovieListStatsUpdateToOneWithWhereWithoutMovieListInput = {
  data: MovieListStatsUpdateWithoutMovieListInput;
  where?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsUpdateWithoutMovieListInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovieListStatsUpsertWithoutMovieListInput = {
  create: MovieListStatsCreateWithoutMovieListInput;
  update: MovieListStatsUpdateWithoutMovieListInput;
  where?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsWhereInput = {
  AND?: InputMaybe<Array<MovieListStatsWhereInput>>;
  MovieList?: InputMaybe<MovieListRelationFilter>;
  NOT?: InputMaybe<Array<MovieListStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieListStatsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likes?: InputMaybe<IntFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type MovieListStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListStatsWhereInput>>;
  MovieList?: InputMaybe<MovieListRelationFilter>;
  NOT?: InputMaybe<Array<MovieListStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieListStatsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntFilter>;
  movieListId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type MovieListUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateManyWithWhereWithoutMovieListAuthorInput = {
  data: MovieListUpdateManyMutationInput;
  where: MovieListScalarWhereInput;
};

export type MovieListUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieListUpdateManyMutationInput;
  where: MovieListScalarWhereInput;
};

export type MovieListUpdateManyWithoutMovieListAuthorNestedInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMovieListAuthorInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMovieListAuthorInput>>;
  createMany?: InputMaybe<MovieListCreateManyMovieListAuthorInputEnvelope>;
  delete?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput>>;
  updateMany?: InputMaybe<Array<MovieListUpdateManyWithWhereWithoutMovieListAuthorInput>>;
  upsert?: InputMaybe<Array<MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput>>;
};

export type MovieListUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieListUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieListUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieListUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutCommentsInput>;
  update?: InputMaybe<MovieListUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<MovieListUpsertWithoutCommentsInput>;
};

export type MovieListUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieListCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieListUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieListUpsertWithoutLikedByInput>;
};

export type MovieListUpdateToOneWithWhereWithoutCommentsInput = {
  data: MovieListUpdateWithoutCommentsInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieListUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput = {
  data: MovieListUpdateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieListUpdateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutLikedByInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMovieListAuthorInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMoviesInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdatetagsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput = {
  create: MovieListCreateWithoutMovieListAuthorInput;
  update: MovieListUpdateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieListCreateWithoutMoviesInput;
  update: MovieListUpdateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpsertWithoutCommentsInput = {
  create: MovieListCreateWithoutCommentsInput;
  update: MovieListUpdateWithoutCommentsInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpsertWithoutLikedByInput = {
  create: MovieListCreateWithoutLikedByInput;
  update: MovieListUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListWhereInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  comments?: InputMaybe<MovieListCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  likedBy?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  stats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  comments?: InputMaybe<MovieListCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  stats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieMaxAggregate = {
  __typename?: 'MovieMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieMinAggregate = {
  __typename?: 'MovieMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelevanceFieldEnum =
  | 'id';

export type MovieOrderByRelevanceInput = {
  fields: Array<MovieOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistOrderByRelationAggregateInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryOrderByRelationAggregateInput>;
  likedBy?: InputMaybe<MovieLikedByUserOrderByRelationAggregateInput>;
  movieInfo?: InputMaybe<MovieInfoOrderByWithRelationAndSearchRelevanceInput>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieStats?: InputMaybe<MovieStatsOrderByWithRelationAndSearchRelevanceInput>;
  ratedBy?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageOrderByRelationAggregateInput>;
  studios?: InputMaybe<MovieStudioOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  watchedBy?: InputMaybe<MovieWatchedByUserOrderByRelationAggregateInput>;
};

export type MovieRating = {
  __typename?: 'MovieRating';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  review?: Maybe<MovieReview>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};


export type MovieRatingReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieRatingAvgAggregate = {
  __typename?: 'MovieRatingAvgAggregate';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type MovieRatingAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type MovieRatingCountAggregate = {
  __typename?: 'MovieRatingCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieRatingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieRatingCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieRatingCreateManyMovieInputEnvelope = {
  data: Array<MovieRatingCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieRatingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieRatingCreateManyUserInputEnvelope = {
  data: Array<MovieRatingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieRatingCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyMovieInputEnvelope>;
};

export type MovieRatingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyUserInputEnvelope>;
};

export type MovieRatingCreateNestedOneWithoutReviewInput = {
  connect?: InputMaybe<MovieRatingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieRatingCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<MovieRatingCreateWithoutReviewInput>;
};

export type MovieRatingCreateOrConnectWithoutMovieInput = {
  create: MovieRatingCreateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateOrConnectWithoutReviewInput = {
  create: MovieRatingCreateWithoutReviewInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateOrConnectWithoutUserInput = {
  create: MovieRatingCreateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateWithoutReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieRatingGroupBy = {
  __typename?: 'MovieRatingGroupBy';
  _avg?: Maybe<MovieRatingAvgAggregate>;
  _count?: Maybe<MovieRatingCountAggregate>;
  _max?: Maybe<MovieRatingMaxAggregate>;
  _min?: Maybe<MovieRatingMinAggregate>;
  _sum?: Maybe<MovieRatingSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type MovieRatingListRelationFilter = {
  every?: InputMaybe<MovieRatingWhereInput>;
  none?: InputMaybe<MovieRatingWhereInput>;
  some?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingMaxAggregate = {
  __typename?: 'MovieRatingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieRatingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingMinAggregate = {
  __typename?: 'MovieRatingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieRatingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieId'
  | 'userId';

export type MovieRatingOrderByRelevanceInput = {
  fields: Array<MovieRatingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieRatingOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieRatingAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieRatingCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieRatingMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieRatingMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieRatingSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieRatingOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<MovieReviewOrderByWithRelationAndSearchRelevanceInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingRelationFilter = {
  is?: InputMaybe<MovieRatingWhereInput>;
  isNot?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'movieId'
  | 'rating'
  | 'updatedAt'
  | 'userId';

export type MovieRatingScalarWhereInput = {
  AND?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRatingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieRatingSumAggregate = {
  __typename?: 'MovieRatingSumAggregate';
  rating?: Maybe<Scalars['Int']['output']>;
};

export type MovieRatingSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type MovieRatingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieRatingUpdateManyWithWhereWithoutMovieInput = {
  data: MovieRatingUpdateManyMutationInput;
  where: MovieRatingScalarWhereInput;
};

export type MovieRatingUpdateManyWithWhereWithoutUserInput = {
  data: MovieRatingUpdateManyMutationInput;
  where: MovieRatingScalarWhereInput;
};

export type MovieRatingUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieRatingUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieRatingUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieRatingUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieRatingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieRatingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieRatingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieRatingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieRatingUpdateOneRequiredWithoutReviewNestedInput = {
  connect?: InputMaybe<MovieRatingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieRatingCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<MovieRatingCreateWithoutReviewInput>;
  update?: InputMaybe<MovieRatingUpdateToOneWithWhereWithoutReviewInput>;
  upsert?: InputMaybe<MovieRatingUpsertWithoutReviewInput>;
};

export type MovieRatingUpdateToOneWithWhereWithoutReviewInput = {
  data: MovieRatingUpdateWithoutReviewInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieRatingUpdateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieRatingUpdateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateWithoutReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieRatingUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieRatingCreateWithoutMovieInput;
  update: MovieRatingUpdateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieRatingCreateWithoutUserInput;
  update: MovieRatingUpdateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpsertWithoutReviewInput = {
  create: MovieRatingCreateWithoutReviewInput;
  update: MovieRatingUpdateWithoutReviewInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieRatingWhereInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<MovieReviewNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRatingWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<MovieReviewNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieRatingUserIdMovieIdCompoundUniqueInput>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export type MovieReview = {
  __typename?: 'MovieReview';
  _count?: Maybe<MovieReviewCount>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  likedBy: Array<MovieReviewLikedByUser>;
  rating: MovieRating;
  ratingId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type MovieReviewLikedByArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewCount = {
  __typename?: 'MovieReviewCount';
  likedBy: Scalars['Int']['output'];
};


export type MovieReviewCountLikedByArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewCountAggregate = {
  __typename?: 'MovieReviewCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ratingId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieReviewCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput>;
  rating: MovieRatingCreateNestedOneWithoutReviewInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateManyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ratingId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikedByInput>;
};

export type MovieReviewCreateNestedOneWithoutRatingInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovieReviewCreateWithoutRatingInput>;
};

export type MovieReviewCreateOrConnectWithoutLikedByInput = {
  create: MovieReviewCreateWithoutLikedByInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutRatingInput = {
  create: MovieReviewCreateWithoutRatingInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateWithoutLikedByInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: MovieRatingCreateNestedOneWithoutReviewInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateWithoutRatingInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewGroupBy = {
  __typename?: 'MovieReviewGroupBy';
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  ratingId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieReviewLikedByUser = {
  __typename?: 'MovieReviewLikedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movieReview: MovieReview;
  movieReviewId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieReviewLikedByUserCountAggregate = {
  __typename?: 'MovieReviewLikedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieReviewId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieReviewLikedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikedByInput;
  user: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope = {
  data: Array<MovieReviewLikedByUserCreateManyMovieReviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieReviewLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReviewId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieReviewLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutMovieReviewInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope>;
};

export type MovieReviewLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput = {
  create: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieReviewLikedByUserCreateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserCreateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikedByInput;
};

export type MovieReviewLikedByUserGroupBy = {
  __typename?: 'MovieReviewLikedByUserGroupBy';
  _count?: Maybe<MovieReviewLikedByUserCountAggregate>;
  _max?: Maybe<MovieReviewLikedByUserMaxAggregate>;
  _min?: Maybe<MovieReviewLikedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieReviewId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieReviewLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieReviewLikedByUserWhereInput>;
  none?: InputMaybe<MovieReviewLikedByUserWhereInput>;
  some?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewLikedByUserMaxAggregate = {
  __typename?: 'MovieReviewLikedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieReviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieReviewLikedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserMinAggregate = {
  __typename?: 'MovieReviewLikedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieReviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieReviewLikedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByRelevanceFieldEnum =
  | 'movieReviewId'
  | 'userId';

export type MovieReviewLikedByUserOrderByRelevanceInput = {
  fields: Array<MovieReviewLikedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieReviewLikedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieReviewLikedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewLikedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewLikedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieReviewLikedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieReview?: InputMaybe<MovieReviewOrderByWithRelationAndSearchRelevanceInput>;
  movieReviewId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieReviewId'
  | 'userId';

export type MovieReviewLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieReviewLikedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieReviewId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieReviewLikedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where: MovieReviewLikedByUserScalarWhereInput;
};

export type MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where: MovieReviewLikedByUserScalarWhereInput;
};

export type MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutMovieReviewInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope>;
  delete?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput>>;
  updateMany?: InputMaybe<Array<MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput>>;
  upsert?: InputMaybe<Array<MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput>>;
};

export type MovieReviewLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput = {
  data: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewLikedByUserUpdateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpdateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput = {
  create: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  update: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewLikedByUserCreateWithoutUserInput;
  update: MovieReviewLikedByUserUpdateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput = {
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieReviewLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieReviewId?: InputMaybe<MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput>;
};

export type MovieReviewMaxAggregate = {
  __typename?: 'MovieReviewMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ratingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieReviewMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewMinAggregate = {
  __typename?: 'MovieReviewMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ratingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieReviewMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewNullableRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewOrderByRelevanceFieldEnum =
  | 'content'
  | 'id'
  | 'ratingId';

export type MovieReviewOrderByRelevanceInput = {
  fields: Array<MovieReviewOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieReviewOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieReviewOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedBy?: InputMaybe<MovieReviewLikedByUserOrderByRelationAggregateInput>;
  rating?: InputMaybe<MovieRatingOrderByWithRelationAndSearchRelevanceInput>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewScalarFieldEnum =
  | 'content'
  | 'createdAt'
  | 'id'
  | 'ratingId'
  | 'updatedAt';

export type MovieReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ratingId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieReviewUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput>;
  rating?: InputMaybe<MovieRatingUpdateOneRequiredWithoutReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieReviewUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutLikedByInput>;
};

export type MovieReviewUpdateOneWithoutRatingNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovieReviewCreateWithoutRatingInput>;
  delete?: InputMaybe<MovieReviewWhereInput>;
  disconnect?: InputMaybe<MovieReviewWhereInput>;
  update?: InputMaybe<MovieReviewUpdateToOneWithWhereWithoutRatingInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutRatingInput>;
};

export type MovieReviewUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieReviewUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpdateToOneWithWhereWithoutRatingInput = {
  data: MovieReviewUpdateWithoutRatingInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpdateWithoutLikedByInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<MovieRatingUpdateOneRequiredWithoutReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateWithoutRatingInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpsertWithoutLikedByInput = {
  create: MovieReviewCreateWithoutLikedByInput;
  update: MovieReviewUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpsertWithoutRatingInput = {
  create: MovieReviewCreateWithoutRatingInput;
  update: MovieReviewUpdateWithoutRatingInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewWhereInput = {
  AND?: InputMaybe<Array<MovieReviewWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likedBy?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  rating?: InputMaybe<MovieRatingRelationFilter>;
  ratingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieReviewWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  rating?: InputMaybe<MovieRatingRelationFilter>;
  ratingId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

export type MovieScalarWhereInput = {
  AND?: InputMaybe<Array<MovieScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieSpokenLanguage = {
  __typename?: 'MovieSpokenLanguage';
  _count?: Maybe<MovieSpokenLanguageCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  language: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieSpokenLanguageCount = {
  __typename?: 'MovieSpokenLanguageCount';
  movies: Scalars['Int']['output'];
};


export type MovieSpokenLanguageCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieSpokenLanguageCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieSpokenLanguageCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieSpokenLanguageCreateWithoutMoviesInput>>;
};

export type MovieSpokenLanguageCreateOrConnectWithoutMoviesInput = {
  create: MovieSpokenLanguageCreateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  language: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieSpokenLanguageListRelationFilter = {
  every?: InputMaybe<MovieSpokenLanguageWhereInput>;
  none?: InputMaybe<MovieSpokenLanguageWhereInput>;
  some?: InputMaybe<MovieSpokenLanguageWhereInput>;
};

export type MovieSpokenLanguageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageOrderByRelevanceFieldEnum =
  | 'language';

export type MovieSpokenLanguageOrderByRelevanceInput = {
  fields: Array<MovieSpokenLanguageOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieSpokenLanguageOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageScalarFieldEnum =
  | 'createdAt'
  | 'language'
  | 'updatedAt';

export type MovieSpokenLanguageScalarWhereInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  language?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieSpokenLanguageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieSpokenLanguageUpdateManyMutationInput;
  where: MovieSpokenLanguageScalarWhereInput;
};

export type MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieSpokenLanguageCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieSpokenLanguageCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieSpokenLanguageUpdateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieSpokenLanguageCreateWithoutMoviesInput;
  update: MovieSpokenLanguageUpdateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageWhereInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  language?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieSpokenLanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  language?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStats = {
  __typename?: 'MovieStats';
  avgRating: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  overallPlaceInTop: Scalars['Int']['output'];
  timesWatchedCount: Scalars['Int']['output'];
  totalLikesCount: Scalars['Int']['output'];
  totalRatingsCount: Scalars['Int']['output'];
};

export type MovieStatsCreateNestedOneWithoutMovieInput = {
  connect?: InputMaybe<MovieStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieStatsCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieStatsCreateWithoutMovieInput>;
};

export type MovieStatsCreateOrConnectWithoutMovieInput = {
  create: MovieStatsCreateWithoutMovieInput;
  where: MovieStatsWhereUniqueInput;
};

export type MovieStatsCreateWithoutMovieInput = {
  avgRating: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  overallPlaceInTop: Scalars['Int']['input'];
  timesWatchedCount: Scalars['Int']['input'];
  totalLikesCount: Scalars['Int']['input'];
  totalRatingsCount: Scalars['Int']['input'];
};

export type MovieStatsNullableRelationFilter = {
  is?: InputMaybe<MovieStatsWhereInput>;
  isNot?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieId';

export type MovieStatsOrderByRelevanceInput = {
  fields: Array<MovieStatsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieStatsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieStatsOrderByRelevanceInput>;
  avgRating?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  overallPlaceInTop?: InputMaybe<SortOrder>;
  timesWatchedCount?: InputMaybe<SortOrder>;
  totalLikesCount?: InputMaybe<SortOrder>;
  totalRatingsCount?: InputMaybe<SortOrder>;
};

export type MovieStatsUpdateOneWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieStatsCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieStatsCreateWithoutMovieInput>;
  delete?: InputMaybe<MovieStatsWhereInput>;
  disconnect?: InputMaybe<MovieStatsWhereInput>;
  update?: InputMaybe<MovieStatsUpdateToOneWithWhereWithoutMovieInput>;
  upsert?: InputMaybe<MovieStatsUpsertWithoutMovieInput>;
};

export type MovieStatsUpdateToOneWithWhereWithoutMovieInput = {
  data: MovieStatsUpdateWithoutMovieInput;
  where?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsUpdateWithoutMovieInput = {
  avgRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  overallPlaceInTop?: InputMaybe<IntFieldUpdateOperationsInput>;
  timesWatchedCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalLikesCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalRatingsCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovieStatsUpsertWithoutMovieInput = {
  create: MovieStatsCreateWithoutMovieInput;
  update: MovieStatsUpdateWithoutMovieInput;
  where?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsWhereInput = {
  AND?: InputMaybe<Array<MovieStatsWhereInput>>;
  NOT?: InputMaybe<Array<MovieStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieStatsWhereInput>>;
  avgRating?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  overallPlaceInTop?: InputMaybe<IntFilter>;
  timesWatchedCount?: InputMaybe<IntFilter>;
  totalLikesCount?: InputMaybe<IntFilter>;
  totalRatingsCount?: InputMaybe<IntFilter>;
};

export type MovieStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieStatsWhereInput>>;
  NOT?: InputMaybe<Array<MovieStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieStatsWhereInput>>;
  avgRating?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<Scalars['String']['input']>;
  overallPlaceInTop?: InputMaybe<IntFilter>;
  timesWatchedCount?: InputMaybe<IntFilter>;
  totalLikesCount?: InputMaybe<IntFilter>;
  totalRatingsCount?: InputMaybe<IntFilter>;
};

export type MovieStudio = {
  __typename?: 'MovieStudio';
  _count?: Maybe<MovieStudioCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieStudioCount = {
  __typename?: 'MovieStudioCount';
  movies: Scalars['Int']['output'];
};


export type MovieStudioCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieStudioCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieStudioCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieStudioCreateWithoutMoviesInput>>;
};

export type MovieStudioCreateOrConnectWithoutMoviesInput = {
  create: MovieStudioCreateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieStudioListRelationFilter = {
  every?: InputMaybe<MovieStudioWhereInput>;
  none?: InputMaybe<MovieStudioWhereInput>;
  some?: InputMaybe<MovieStudioWhereInput>;
};

export type MovieStudioOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieStudioOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieStudioOrderByRelevanceInput = {
  fields: Array<MovieStudioOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieStudioOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieStudioOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieStudioScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt';

export type MovieStudioScalarWhereInput = {
  AND?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStudioUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieStudioUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieStudioUpdateManyMutationInput;
  where: MovieStudioScalarWhereInput;
};

export type MovieStudioUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieStudioCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieStudioCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieStudioUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieStudioUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieStudioUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieStudioUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieStudioUpdateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieStudioUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieStudioCreateWithoutMoviesInput;
  update: MovieStudioUpdateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioWhereInput = {
  AND?: InputMaybe<Array<MovieStudioWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStudioWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieStudioWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutMovieListsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutMovieListsNestedInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutMovieListsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutMovieListsInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutMovieListsInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutMovieListsInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutMovieListsInput>>;
};

export type MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutInWatchlistByUsersInput>;
  create?: InputMaybe<MovieCreateWithoutInWatchlistByUsersInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput>;
  upsert?: InputMaybe<MovieUpsertWithoutInWatchlistByUsersInput>;
};

export type MovieUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutLikedByInput>;
};

export type MovieUpdateOneRequiredWithoutRatedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatedByInput>;
  create?: InputMaybe<MovieCreateWithoutRatedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutRatedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutRatedByInput>;
};

export type MovieUpdateOneRequiredWithoutWatchedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchedByInput>;
  create?: InputMaybe<MovieCreateWithoutWatchedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutWatchedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutWatchedByInput>;
};

export type MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput = {
  data: MovieUpdateWithoutInWatchlistByUsersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutRatedByInput = {
  data: MovieUpdateWithoutRatedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutWatchedByInput = {
  data: MovieUpdateWithoutWatchedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateWithWhereUniqueWithoutMovieListsInput = {
  data: MovieUpdateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutInWatchlistByUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutLikedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutMovieListsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutRatedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutWatchedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  update: MovieUpdateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  update: MovieUpdateWithoutInWatchlistByUsersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutLikedByInput = {
  create: MovieCreateWithoutLikedByInput;
  update: MovieUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutRatedByInput = {
  create: MovieCreateWithoutRatedByInput;
  update: MovieUpdateWithoutRatedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutWatchedByInput = {
  create: MovieCreateWithoutWatchedByInput;
  update: MovieUpdateWithoutWatchedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieWatchedByUser = {
  __typename?: 'MovieWatchedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieWatchedByUserCountAggregate = {
  __typename?: 'MovieWatchedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieWatchedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutWatchedByInput;
  user: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
};

export type MovieWatchedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyMovieInputEnvelope = {
  data: Array<MovieWatchedByUserCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieWatchedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieWatchedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieWatchedByUserCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyMovieInputEnvelope>;
};

export type MovieWatchedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyUserInputEnvelope>;
};

export type MovieWatchedByUserCreateOrConnectWithoutMovieInput = {
  create: MovieWatchedByUserCreateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserCreateOrConnectWithoutUserInput = {
  create: MovieWatchedByUserCreateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
};

export type MovieWatchedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutWatchedByInput;
};

export type MovieWatchedByUserGroupBy = {
  __typename?: 'MovieWatchedByUserGroupBy';
  _count?: Maybe<MovieWatchedByUserCountAggregate>;
  _max?: Maybe<MovieWatchedByUserMaxAggregate>;
  _min?: Maybe<MovieWatchedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieWatchedByUserListRelationFilter = {
  every?: InputMaybe<MovieWatchedByUserWhereInput>;
  none?: InputMaybe<MovieWatchedByUserWhereInput>;
  some?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieWatchedByUserMaxAggregate = {
  __typename?: 'MovieWatchedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieWatchedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserMinAggregate = {
  __typename?: 'MovieWatchedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieWatchedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type MovieWatchedByUserOrderByRelevanceInput = {
  fields: Array<MovieWatchedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieWatchedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieWatchedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieWatchedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieWatchedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieWatchedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type MovieWatchedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieWatchedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieWatchedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutWatchedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput>;
};

export type MovieWatchedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where: MovieWatchedByUserScalarWhereInput;
};

export type MovieWatchedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where: MovieWatchedByUserScalarWhereInput;
};

export type MovieWatchedByUserUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieWatchedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieWatchedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieWatchedByUserUpdateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieWatchedByUserUpdateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput>;
};

export type MovieWatchedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutWatchedByNestedInput>;
};

export type MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieWatchedByUserCreateWithoutMovieInput;
  update: MovieWatchedByUserUpdateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieWatchedByUserCreateWithoutUserInput;
  update: MovieWatchedByUserUpdateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieWatchedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieWatchedByUserUserIdMovieIdCompoundUniqueInput>;
};

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  likedBy?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratedBy?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchedBy?: InputMaybe<MovieWatchedByUserListRelationFilter>;
};

export type MovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  likedBy?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratedBy?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchedBy?: InputMaybe<MovieWatchedByUserListRelationFilter>;
};

export type MoviefireAppUserRole =
  | 'ADMIN'
  | 'USER';

export type MoviesSearchCriteriaInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MovifierAppUser = {
  __typename?: 'MovifierAppUser';
  _count?: Maybe<MovifierAppUserCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: MoviefireAppUserRole;
  updatedAt: Scalars['DateTimeISO']['output'];
  username: Scalars['String']['output'];
};

export type MovifierAppUserCount = {
  __typename?: 'MovifierAppUserCount';
  MovieListLikedByUser: Scalars['Int']['output'];
  likedMovieReviews: Scalars['Int']['output'];
  likedMovies: Scalars['Int']['output'];
  movieLists: Scalars['Int']['output'];
  movieListsComments: Scalars['Int']['output'];
  ratedMovies: Scalars['Int']['output'];
  watchedMovies: Scalars['Int']['output'];
  watchlist: Scalars['Int']['output'];
};


export type MovifierAppUserCountMovieListLikedByUserArgs = {
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MovifierAppUserCountLikedMovieReviewsArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MovifierAppUserCountLikedMoviesArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovifierAppUserCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovifierAppUserCountMovieListsCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovifierAppUserCountRatedMoviesArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovifierAppUserCountWatchedMoviesArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MovifierAppUserCountWatchlistArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type MovifierAppUserCreateInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMovieReviewsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutLikedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListLikedByUserInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsCommentsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutRatedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutWatchlistInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchlistInput>;
};

export type MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput = {
  create: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutLikedMoviesInput = {
  create: MovifierAppUserCreateWithoutLikedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput = {
  create: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput = {
  create: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsInput = {
  create: MovifierAppUserCreateWithoutMovieListsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutRatedMoviesInput = {
  create: MovifierAppUserCreateWithoutRatedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput = {
  create: MovifierAppUserCreateWithoutWatchedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateWithoutLikedMovieReviewsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutLikedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListLikedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListsCommentsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutRatedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutWatchedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutWatchlistInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserOrderByRelevanceFieldEnum =
  | 'email'
  | 'id'
  | 'name'
  | 'password'
  | 'username';

export type MovifierAppUserOrderByRelevanceInput = {
  fields: Array<MovifierAppUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovifierAppUserOrderByWithRelationAndSearchRelevanceInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<MovifierAppUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserOrderByRelationAggregateInput>;
  likedMovies?: InputMaybe<MovieLikedByUserOrderByRelationAggregateInput>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieListsComments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  ratedMovies?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  watchedMovies?: InputMaybe<MovieWatchedByUserOrderByRelationAggregateInput>;
  watchlist?: InputMaybe<UserMovieWatchlistOrderByRelationAggregateInput>;
};

export type MovifierAppUserRelationFilter = {
  is?: InputMaybe<MovifierAppUserWhereInput>;
  isNot?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserScalarFieldEnum =
  | 'createdAt'
  | 'email'
  | 'id'
  | 'name'
  | 'password'
  | 'role'
  | 'updatedAt'
  | 'username';

export type MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMovieReviewsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutLikedMovieReviewsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutLikedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListLikedByUserInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListLikedByUserInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsCommentsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListsCommentsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutRatedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutWatchedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchlistInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutWatchlistInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput = {
  data: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput = {
  data: MovifierAppUserUpdateWithoutLikedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput = {
  data: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput = {
  data: MovifierAppUserUpdateWithoutRatedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput = {
  data: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput = {
  data: MovifierAppUserUpdateWithoutWatchlistInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateWithoutLikedMovieReviewsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutLikedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListLikedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListsCommentsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutRatedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutWatchedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutWatchlistInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpsertWithoutLikedMovieReviewsInput = {
  create: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  update: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutLikedMoviesInput = {
  create: MovifierAppUserCreateWithoutLikedMoviesInput;
  update: MovifierAppUserUpdateWithoutLikedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListLikedByUserInput = {
  create: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  update: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListsCommentsInput = {
  create: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  update: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListsInput = {
  create: MovifierAppUserCreateWithoutMovieListsInput;
  update: MovifierAppUserUpdateWithoutMovieListsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutRatedMoviesInput = {
  create: MovifierAppUserCreateWithoutRatedMoviesInput;
  update: MovifierAppUserUpdateWithoutRatedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutWatchedMoviesInput = {
  create: MovifierAppUserCreateWithoutWatchedMoviesInput;
  update: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  update: MovifierAppUserUpdateWithoutWatchlistInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserWhereInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  ratedMovies?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  watchedMovies?: InputMaybe<MovieWatchedByUserListRelationFilter>;
  watchlist?: InputMaybe<UserMovieWatchlistListRelationFilter>;
};

export type MovifierAppUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  ratedMovies?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
  watchedMovies?: InputMaybe<MovieWatchedByUserListRelationFilter>;
  watchlist?: InputMaybe<UserMovieWatchlistListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyMovie: AffectedRowsOutput;
  createManyMovieLikedByUser: AffectedRowsOutput;
  createManyMovieRating: AffectedRowsOutput;
  createManyMovieReview: AffectedRowsOutput;
  createManyMovieReviewLikedByUser: AffectedRowsOutput;
  createManyMovieWatchedByUser: AffectedRowsOutput;
  createManyUserMovieWatchlist: AffectedRowsOutput;
  createOneMovie: Movie;
  createOneMovieLikedByUser: MovieLikedByUser;
  createOneMovieRating: MovieRating;
  createOneMovieReview: MovieReview;
  createOneMovieReviewLikedByUser: MovieReviewLikedByUser;
  createOneMovieWatchedByUser: MovieWatchedByUser;
  createOneMovifierAppUser: UserRegisterOutput;
  createOneUserMovieWatchlist: UserMovieWatchlist;
  deleteManyMovie: AffectedRowsOutput;
  deleteManyMovieLikedByUser: AffectedRowsOutput;
  deleteManyMovieRating: AffectedRowsOutput;
  deleteManyMovieReview: AffectedRowsOutput;
  deleteManyMovieReviewLikedByUser: AffectedRowsOutput;
  deleteManyMovieWatchedByUser: AffectedRowsOutput;
  deleteManyUserMovieWatchlist: AffectedRowsOutput;
  deleteOneMovie?: Maybe<Movie>;
  deleteOneMovieLikedByUser?: Maybe<MovieLikedByUser>;
  deleteOneMovieRating?: Maybe<MovieRating>;
  deleteOneMovieReview?: Maybe<MovieReview>;
  deleteOneMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  deleteOneMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  deleteOneUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  loginUser: UserLoginOutput;
  updateManyMovie: AffectedRowsOutput;
  updateManyMovieLikedByUser: AffectedRowsOutput;
  updateManyMovieRating: AffectedRowsOutput;
  updateManyMovieReview: AffectedRowsOutput;
  updateManyMovieReviewLikedByUser: AffectedRowsOutput;
  updateManyMovieWatchedByUser: AffectedRowsOutput;
  updateManyUserMovieWatchlist: AffectedRowsOutput;
  updateOneMovie?: Maybe<Movie>;
  updateOneMovieLikedByUser?: Maybe<MovieLikedByUser>;
  updateOneMovieRating?: Maybe<MovieRating>;
  updateOneMovieReview?: Maybe<MovieReview>;
  updateOneMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  updateOneMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  updateOneUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  upsertOneMovie: Movie;
  upsertOneMovieLikedByUser: MovieLikedByUser;
  upsertOneMovieRating: MovieRating;
  upsertOneMovieReview: MovieReview;
  upsertOneMovieReviewLikedByUser: MovieReviewLikedByUser;
  upsertOneMovieWatchedByUser: MovieWatchedByUser;
  upsertOneUserMovieWatchlist: UserMovieWatchlist;
};


export type MutationCreateManyMovieArgs = {
  data: Array<MovieCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieLikedByUserArgs = {
  data: Array<MovieLikedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieRatingArgs = {
  data: Array<MovieRatingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieReviewArgs = {
  data: Array<MovieReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieReviewLikedByUserArgs = {
  data: Array<MovieReviewLikedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieWatchedByUserArgs = {
  data: Array<MovieWatchedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserMovieWatchlistArgs = {
  data: Array<UserMovieWatchlistCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneMovieArgs = {
  data: MovieCreateInput;
};


export type MutationCreateOneMovieLikedByUserArgs = {
  data: MovieLikedByUserCreateInput;
};


export type MutationCreateOneMovieRatingArgs = {
  data: MovieRatingCreateInput;
};


export type MutationCreateOneMovieReviewArgs = {
  data: MovieReviewCreateInput;
};


export type MutationCreateOneMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserCreateInput;
};


export type MutationCreateOneMovieWatchedByUserArgs = {
  data: MovieWatchedByUserCreateInput;
};


export type MutationCreateOneMovifierAppUserArgs = {
  data: MovifierAppUserCreateInput;
};


export type MutationCreateOneUserMovieWatchlistArgs = {
  data: UserMovieWatchlistCreateInput;
};


export type MutationDeleteManyMovieArgs = {
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationDeleteManyMovieLikedByUserArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MutationDeleteManyMovieRatingArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MutationDeleteManyMovieReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type MutationDeleteManyMovieReviewLikedByUserArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MutationDeleteManyMovieWatchedByUserArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MutationDeleteManyUserMovieWatchlistArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MutationDeleteOneMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type MutationDeleteOneMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationDeleteOneMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type MutationDeleteOneMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type MutationDeleteOneMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationDeleteOneMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationDeleteOneUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  data: UserLoginInput;
};


export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationUpdateManyMovieLikedByUserArgs = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MutationUpdateManyMovieRatingArgs = {
  data: MovieRatingUpdateManyMutationInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MutationUpdateManyMovieReviewArgs = {
  data: MovieReviewUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type MutationUpdateManyMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MutationUpdateManyMovieWatchedByUserArgs = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MutationUpdateManyUserMovieWatchlistArgs = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MutationUpdateOneMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpdateOneMovieLikedByUserArgs = {
  data: MovieLikedByUserUpdateInput;
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationUpdateOneMovieRatingArgs = {
  data: MovieRatingUpdateInput;
  where: MovieRatingWhereUniqueInput;
};


export type MutationUpdateOneMovieReviewArgs = {
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};


export type MutationUpdateOneMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserUpdateInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationUpdateOneMovieWatchedByUserArgs = {
  data: MovieWatchedByUserUpdateInput;
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationUpdateOneUserMovieWatchlistArgs = {
  data: UserMovieWatchlistUpdateInput;
  where: UserMovieWatchlistWhereUniqueInput;
};


export type MutationUpsertOneMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpsertOneMovieLikedByUserArgs = {
  create: MovieLikedByUserCreateInput;
  update: MovieLikedByUserUpdateInput;
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationUpsertOneMovieRatingArgs = {
  create: MovieRatingCreateInput;
  update: MovieRatingUpdateInput;
  where: MovieRatingWhereUniqueInput;
};


export type MutationUpsertOneMovieReviewArgs = {
  create: MovieReviewCreateInput;
  update: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};


export type MutationUpsertOneMovieReviewLikedByUserArgs = {
  create: MovieReviewLikedByUserCreateInput;
  update: MovieReviewLikedByUserUpdateInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationUpsertOneMovieWatchedByUserArgs = {
  create: MovieWatchedByUserCreateInput;
  update: MovieWatchedByUserUpdateInput;
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationUpsertOneUserMovieWatchlistArgs = {
  create: UserMovieWatchlistCreateInput;
  update: UserMovieWatchlistUpdateInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumMoviefireAppUserRoleFilter = {
  equals?: InputMaybe<MoviefireAppUserRole>;
  in?: InputMaybe<Array<MoviefireAppUserRole>>;
  not?: InputMaybe<NestedEnumMoviefireAppUserRoleFilter>;
  notIn?: InputMaybe<Array<MoviefireAppUserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateMovie: AggregateMovie;
  aggregateMovieLikedByUser: AggregateMovieLikedByUser;
  aggregateMovieRating: AggregateMovieRating;
  aggregateMovieReview: AggregateMovieReview;
  aggregateMovieReviewLikedByUser: AggregateMovieReviewLikedByUser;
  aggregateMovieWatchedByUser: AggregateMovieWatchedByUser;
  aggregateUserMovieWatchlist: AggregateUserMovieWatchlist;
  findFirstMovie?: Maybe<Movie>;
  findFirstMovieLikedByUser?: Maybe<MovieLikedByUser>;
  findFirstMovieLikedByUserOrThrow?: Maybe<MovieLikedByUser>;
  findFirstMovieOrThrow?: Maybe<Movie>;
  findFirstMovieRating?: Maybe<MovieRating>;
  findFirstMovieRatingOrThrow?: Maybe<MovieRating>;
  findFirstMovieReview?: Maybe<MovieReview>;
  findFirstMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  findFirstMovieReviewLikedByUserOrThrow?: Maybe<MovieReviewLikedByUser>;
  findFirstMovieReviewOrThrow?: Maybe<MovieReview>;
  findFirstMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  findFirstMovieWatchedByUserOrThrow?: Maybe<MovieWatchedByUser>;
  findFirstUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  findFirstUserMovieWatchlistOrThrow?: Maybe<UserMovieWatchlist>;
  getMovie?: Maybe<Movie>;
  getMovieLikedByUser?: Maybe<MovieLikedByUser>;
  getMovieRating?: Maybe<MovieRating>;
  getMovieReview?: Maybe<MovieReview>;
  getMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  getMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  getUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  groupByMovie: Array<MovieGroupBy>;
  groupByMovieLikedByUser: Array<MovieLikedByUserGroupBy>;
  groupByMovieRating: Array<MovieRatingGroupBy>;
  groupByMovieReview: Array<MovieReviewGroupBy>;
  groupByMovieReviewLikedByUser: Array<MovieReviewLikedByUserGroupBy>;
  groupByMovieWatchedByUser: Array<MovieWatchedByUserGroupBy>;
  groupByUserMovieWatchlist: Array<UserMovieWatchlistGroupBy>;
  me?: Maybe<MovifierAppUser>;
  movie?: Maybe<Movie>;
  movieLikedByUser?: Maybe<MovieLikedByUser>;
  movieLikedByUsers: Array<MovieLikedByUser>;
  movieRating?: Maybe<MovieRating>;
  movieRatings: Array<MovieRating>;
  movieReview?: Maybe<MovieReview>;
  movieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  movieReviewLikedByUsers: Array<MovieReviewLikedByUser>;
  movieReviews: Array<MovieReview>;
  movieWatchedByUser?: Maybe<MovieWatchedByUser>;
  movieWatchedByUsers: Array<MovieWatchedByUser>;
  movies: Array<Movie>;
  movifierAppUsers: Array<MovifierAppUser>;
  searchMovies: Array<Movie>;
  userMovieWatchlist?: Maybe<UserMovieWatchlist>;
  userMovieWatchlists: Array<UserMovieWatchlist>;
};


export type QueryAggregateMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryAggregateMovieLikedByUserArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryAggregateMovieRatingArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryAggregateMovieReviewLikedByUserArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryAggregateMovieWatchedByUserArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryAggregateUserMovieWatchlistArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryFindFirstMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieLikedByUserArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryFindFirstMovieLikedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryFindFirstMovieOrThrowArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieRatingArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryFindFirstMovieRatingOrThrowArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryFindFirstMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryFindFirstMovieReviewLikedByUserArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryFindFirstMovieReviewLikedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryFindFirstMovieReviewOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryFindFirstMovieWatchedByUserArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryFindFirstMovieWatchedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryFindFirstUserMovieWatchlistArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryFindFirstUserMovieWatchlistOrThrowArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryGetMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryGetMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type QueryGetMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type QueryGetMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type QueryGetMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type QueryGetMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type QueryGetUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type QueryGroupByMovieArgs = {
  by: Array<MovieScalarFieldEnum>;
  having?: InputMaybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryGroupByMovieLikedByUserArgs = {
  by: Array<MovieLikedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieLikedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryGroupByMovieRatingArgs = {
  by: Array<MovieRatingScalarFieldEnum>;
  having?: InputMaybe<MovieRatingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryGroupByMovieReviewArgs = {
  by: Array<MovieReviewScalarFieldEnum>;
  having?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryGroupByMovieReviewLikedByUserArgs = {
  by: Array<MovieReviewLikedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieReviewLikedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryGroupByMovieWatchedByUserArgs = {
  by: Array<MovieWatchedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieWatchedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryGroupByUserMovieWatchlistArgs = {
  by: Array<UserMovieWatchlistScalarFieldEnum>;
  having?: InputMaybe<UserMovieWatchlistScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type QueryMovieLikedByUsersArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type QueryMovieRatingsArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type QueryMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type QueryMovieReviewLikedByUsersArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type QueryMovieWatchedByUsersArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryMovifierAppUsersArgs = {
  cursor?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovifierAppUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};


export type QuerySearchMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  searchCriteria: MoviesSearchCriteriaInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type QueryUserMovieWatchlistsArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type SortOrder =
  | 'asc'
  | 'desc';

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserLoginOutput = {
  __typename?: 'UserLoginOutput';
  token: Scalars['String']['output'];
  user: MovifierAppUser;
};

export type UserMovieWatchlist = {
  __typename?: 'UserMovieWatchlist';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type UserMovieWatchlistCountAggregate = {
  __typename?: 'UserMovieWatchlistCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserMovieWatchlistCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  user: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
};

export type UserMovieWatchlistCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyMovieInputEnvelope = {
  data: Array<UserMovieWatchlistCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMovieWatchlistCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyUserInputEnvelope = {
  data: Array<UserMovieWatchlistCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMovieWatchlistCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutMovieInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyMovieInputEnvelope>;
};

export type UserMovieWatchlistCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyUserInputEnvelope>;
};

export type UserMovieWatchlistCreateOrConnectWithoutMovieInput = {
  create: UserMovieWatchlistCreateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistCreateOrConnectWithoutUserInput = {
  create: UserMovieWatchlistCreateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
};

export type UserMovieWatchlistCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
};

export type UserMovieWatchlistGroupBy = {
  __typename?: 'UserMovieWatchlistGroupBy';
  _count?: Maybe<UserMovieWatchlistCountAggregate>;
  _max?: Maybe<UserMovieWatchlistMaxAggregate>;
  _min?: Maybe<UserMovieWatchlistMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserMovieWatchlistListRelationFilter = {
  every?: InputMaybe<UserMovieWatchlistWhereInput>;
  none?: InputMaybe<UserMovieWatchlistWhereInput>;
  some?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type UserMovieWatchlistMaxAggregate = {
  __typename?: 'UserMovieWatchlistMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserMovieWatchlistMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistMinAggregate = {
  __typename?: 'UserMovieWatchlistMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserMovieWatchlistMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type UserMovieWatchlistOrderByRelevanceInput = {
  fields: Array<UserMovieWatchlistOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserMovieWatchlistOrderByWithAggregationInput = {
  _count?: InputMaybe<UserMovieWatchlistCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMovieWatchlistMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMovieWatchlistMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserMovieWatchlistOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type UserMovieWatchlistScalarWhereInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserMovieWatchlistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserMovieWatchlistUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput>;
};

export type UserMovieWatchlistUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where: UserMovieWatchlistScalarWhereInput;
};

export type UserMovieWatchlistUpdateManyWithWhereWithoutUserInput = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where: UserMovieWatchlistScalarWhereInput;
};

export type UserMovieWatchlistUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutMovieInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type UserMovieWatchlistUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserMovieWatchlistUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput = {
  data: UserMovieWatchlistUpdateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput = {
  data: UserMovieWatchlistUpdateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput>;
};

export type UserMovieWatchlistUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput>;
};

export type UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput = {
  create: UserMovieWatchlistCreateWithoutMovieInput;
  update: UserMovieWatchlistUpdateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput = {
  create: UserMovieWatchlistCreateWithoutUserInput;
  update: UserMovieWatchlistUpdateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistWhereInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserMovieWatchlistWhereUniqueInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<UserMovieWatchlistUserIdMovieIdCompoundUniqueInput>;
};

export type UserRegisterOutput = {
  __typename?: 'UserRegisterOutput';
  token: Scalars['String']['output'];
  user: MovifierAppUser;
};

export type GetMovieForPageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieForPageQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, description: string, releaseDate: any, durationInMinutes: number, posterUrl: string, alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', language: string }> } | null };

export type SearchMoviesQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', title: string, posterUrl: string } | null }> };

export type GetMoviesForHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesForHomePageQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', title: string, posterUrl: string } | null }> };

export type MovieReviewCardItemFragment = { __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null };

export type GetMovieRatingReviewQueryVariables = Exact<{
  ratingId: Scalars['String']['input'];
}>;


export type GetMovieRatingReviewQuery = { __typename?: 'Query', movieReview?: { __typename?: 'MovieReview', id: string, content: string } | null };

export type UpsertMovieRatingReviewMutationVariables = Exact<{
  ratingId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type UpsertMovieRatingReviewMutation = { __typename?: 'Mutation', upsertOneMovieReview: { __typename?: 'MovieReview', id: string, content: string } };

export type MovieCardItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', title: string, posterUrl: string } | null };

export type DirectorNamesTitleItemFragment = { __typename?: 'Movie', crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }> };

export type MoviePageItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, description: string, releaseDate: any, durationInMinutes: number, posterUrl: string, alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', language: string }> };

export type IsMovieInUserWatchlistQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieInUserWatchlistQuery = { __typename?: 'Query', userMovieWatchlist?: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } | null };

export type AddMovieToUserWatchlistMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type AddMovieToUserWatchlistMutation = { __typename?: 'Mutation', createOneUserMovieWatchlist: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } };

export type RemoveMovieFromWatchlistMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type RemoveMovieFromWatchlistMutation = { __typename?: 'Mutation', deleteOneUserMovieWatchlist?: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } | null };

export type MoviePageDetailsTabsItemFragment = { __typename?: 'Movie', movieInfo?: { __typename?: 'MovieInfo', alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', language: string }> };

export type MoviePagePosterItemFragment = { __typename?: 'Movie', movieInfo?: { __typename?: 'MovieInfo', posterUrl: string, title: string } | null };

export type PopularMovieReviewsQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PopularMovieReviewsQuery = { __typename?: 'Query', movieReviews: Array<{ __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null }> };

export type RecentMovieReviewsQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RecentMovieReviewsQuery = { __typename?: 'Query', movieReviews: Array<{ __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null }> };

export type GetMovieRatingByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetMovieRatingByUserQuery = { __typename?: 'Query', movieRating?: { __typename?: 'MovieRating', id: string, rating: number } | null };

export type UpsertMovieRatingForUserMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type UpsertMovieRatingForUserMutation = { __typename?: 'Mutation', upsertOneMovieRating: { __typename?: 'MovieRating', id: string, rating: number } };

export type DeleteMovieRatingForUserMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type DeleteMovieRatingForUserMutation = { __typename?: 'Mutation', deleteOneMovieRating?: { __typename?: 'MovieRating', id: string } | null };

export type LoginUserMutationVariables = Exact<{
  data: UserLoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserLoginOutput', token: string, user: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } } };

export type RegisterUserMutationVariables = Exact<{
  data: MovifierAppUserCreateInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createOneMovifierAppUser: { __typename?: 'UserRegisterOutput', token: string, user: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } } };

export type IsMovieReviewLikedByUserQueryVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieReviewLikedByUserQuery = { __typename?: 'Query', movieReviewLikedByUser?: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } | null };

export type MarkMovieReviewLikedMutationVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieReviewLikedMutation = { __typename?: 'Mutation', createOneMovieReviewLikedByUser: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } };

export type UnmarkMovieReviewLikedMutationVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieReviewLikedMutation = { __typename?: 'Mutation', deleteOneMovieReviewLikedByUser?: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } | null };

export type IsMovieLikedByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieLikedByUserQuery = { __typename?: 'Query', movieLikedByUser?: { __typename?: 'MovieLikedByUser', movieId: string } | null };

export type MarkMovieLikedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieLikedMutation = { __typename?: 'Mutation', createOneMovieLikedByUser: { __typename?: 'MovieLikedByUser', createdAt: any } };

export type UnmarkMovieLikedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieLikedMutation = { __typename?: 'Mutation', deleteOneMovieLikedByUser?: { __typename?: 'MovieLikedByUser', createdAt: any } | null };

export type IsMovieWatchedByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieWatchedByUserQuery = { __typename?: 'Query', movieWatchedByUser?: { __typename?: 'MovieWatchedByUser', movieId: string } | null };

export type MarkMovieWatchedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieWatchedMutation = { __typename?: 'Mutation', createOneMovieWatchedByUser: { __typename?: 'MovieWatchedByUser', createdAt: any } };

export type UnmarkMovieWatchedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieWatchedMutation = { __typename?: 'Mutation', deleteOneMovieWatchedByUser?: { __typename?: 'MovieWatchedByUser', createdAt: any } | null };

export type CurrentUserFragment = { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', me?: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } | null };

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AggregateMovie: ResolverTypeWrapper<AggregateMovie>;
  AggregateMovieLikedByUser: ResolverTypeWrapper<AggregateMovieLikedByUser>;
  AggregateMovieRating: ResolverTypeWrapper<AggregateMovieRating>;
  AggregateMovieReview: ResolverTypeWrapper<AggregateMovieReview>;
  AggregateMovieReviewLikedByUser: ResolverTypeWrapper<AggregateMovieReviewLikedByUser>;
  AggregateMovieWatchedByUser: ResolverTypeWrapper<AggregateMovieWatchedByUser>;
  AggregateUserMovieWatchlist: ResolverTypeWrapper<AggregateUserMovieWatchlist>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  EnumMoviefireAppUserRoleFieldUpdateOperationsInput: EnumMoviefireAppUserRoleFieldUpdateOperationsInput;
  EnumMoviefireAppUserRoleFilter: EnumMoviefireAppUserRoleFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  FloatFilter: FloatFilter;
  Genre: ResolverTypeWrapper<Genre>;
  GenreCount: ResolverTypeWrapper<GenreCount>;
  GenreCreateNestedManyWithoutMoviesInput: GenreCreateNestedManyWithoutMoviesInput;
  GenreCreateOrConnectWithoutMoviesInput: GenreCreateOrConnectWithoutMoviesInput;
  GenreCreateWithoutMoviesInput: GenreCreateWithoutMoviesInput;
  GenreListRelationFilter: GenreListRelationFilter;
  GenreOrderByRelationAggregateInput: GenreOrderByRelationAggregateInput;
  GenreOrderByRelevanceFieldEnum: GenreOrderByRelevanceFieldEnum;
  GenreOrderByRelevanceInput: GenreOrderByRelevanceInput;
  GenreOrderByWithRelationAndSearchRelevanceInput: GenreOrderByWithRelationAndSearchRelevanceInput;
  GenreScalarFieldEnum: GenreScalarFieldEnum;
  GenreScalarWhereInput: GenreScalarWhereInput;
  GenreUpdateManyMutationInput: GenreUpdateManyMutationInput;
  GenreUpdateManyWithWhereWithoutMoviesInput: GenreUpdateManyWithWhereWithoutMoviesInput;
  GenreUpdateManyWithoutMoviesNestedInput: GenreUpdateManyWithoutMoviesNestedInput;
  GenreUpdateWithWhereUniqueWithoutMoviesInput: GenreUpdateWithWhereUniqueWithoutMoviesInput;
  GenreUpdateWithoutMoviesInput: GenreUpdateWithoutMoviesInput;
  GenreUpsertWithWhereUniqueWithoutMoviesInput: GenreUpsertWithWhereUniqueWithoutMoviesInput;
  GenreWhereInput: GenreWhereInput;
  GenreWhereUniqueInput: GenreWhereUniqueInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Movie: ResolverTypeWrapper<Movie>;
  MovieCount: ResolverTypeWrapper<MovieCount>;
  MovieCountAggregate: ResolverTypeWrapper<MovieCountAggregate>;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedOneWithoutInWatchlistByUsersInput: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  MovieCreateNestedOneWithoutLikedByInput: MovieCreateNestedOneWithoutLikedByInput;
  MovieCreateNestedOneWithoutRatedByInput: MovieCreateNestedOneWithoutRatedByInput;
  MovieCreateNestedOneWithoutWatchedByInput: MovieCreateNestedOneWithoutWatchedByInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutLikedByInput: MovieCreateOrConnectWithoutLikedByInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatedByInput: MovieCreateOrConnectWithoutRatedByInput;
  MovieCreateOrConnectWithoutWatchedByInput: MovieCreateOrConnectWithoutWatchedByInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutLikedByInput: MovieCreateWithoutLikedByInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatedByInput: MovieCreateWithoutRatedByInput;
  MovieCreateWithoutWatchedByInput: MovieCreateWithoutWatchedByInput;
  MovieCrewMember: ResolverTypeWrapper<MovieCrewMember>;
  MovieCrewMemberCount: ResolverTypeWrapper<MovieCrewMemberCount>;
  MovieCrewMemberCreateNestedOneWithoutMoviesInput: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  MovieCrewMemberCreateOrConnectWithoutMoviesInput: MovieCrewMemberCreateOrConnectWithoutMoviesInput;
  MovieCrewMemberCreateWithoutMoviesInput: MovieCrewMemberCreateWithoutMoviesInput;
  MovieCrewMemberOnMovie: ResolverTypeWrapper<MovieCrewMemberOnMovie>;
  MovieCrewMemberOnMovieCreateManyMovieInput: MovieCrewMemberOnMovieCreateManyMovieInput;
  MovieCrewMemberOnMovieCreateManyMovieInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput;
  MovieCrewMemberOnMovieCreateWithoutMovieInput: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  MovieCrewMemberOnMovieListRelationFilter: MovieCrewMemberOnMovieListRelationFilter;
  MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput: MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput;
  MovieCrewMemberOnMovieOrderByRelationAggregateInput: MovieCrewMemberOnMovieOrderByRelationAggregateInput;
  MovieCrewMemberOnMovieOrderByRelevanceFieldEnum: MovieCrewMemberOnMovieOrderByRelevanceFieldEnum;
  MovieCrewMemberOnMovieOrderByRelevanceInput: MovieCrewMemberOnMovieOrderByRelevanceInput;
  MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberOnMovieScalarFieldEnum: MovieCrewMemberOnMovieScalarFieldEnum;
  MovieCrewMemberOnMovieScalarWhereInput: MovieCrewMemberOnMovieScalarWhereInput;
  MovieCrewMemberOnMovieUpdateManyMutationInput: MovieCrewMemberOnMovieUpdateManyMutationInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieWhereInput: MovieCrewMemberOnMovieWhereInput;
  MovieCrewMemberOnMovieWhereUniqueInput: MovieCrewMemberOnMovieWhereUniqueInput;
  MovieCrewMemberOrderByRelevanceFieldEnum: MovieCrewMemberOrderByRelevanceFieldEnum;
  MovieCrewMemberOrderByRelevanceInput: MovieCrewMemberOrderByRelevanceInput;
  MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberRelationFilter: MovieCrewMemberRelationFilter;
  MovieCrewMemberType: ResolverTypeWrapper<MovieCrewMemberType>;
  MovieCrewMemberTypeCount: ResolverTypeWrapper<MovieCrewMemberTypeCount>;
  MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeOrderByRelevanceFieldEnum: MovieCrewMemberTypeOrderByRelevanceFieldEnum;
  MovieCrewMemberTypeOrderByRelevanceInput: MovieCrewMemberTypeOrderByRelevanceInput;
  MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberTypeRelationFilter: MovieCrewMemberTypeRelationFilter;
  MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput;
  MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeWhereInput: MovieCrewMemberTypeWhereInput;
  MovieCrewMemberTypeWhereUniqueInput: MovieCrewMemberTypeWhereUniqueInput;
  MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput;
  MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput: MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput;
  MovieCrewMemberUpdateWithoutMoviesInput: MovieCrewMemberUpdateWithoutMoviesInput;
  MovieCrewMemberUpsertWithoutMoviesInput: MovieCrewMemberUpsertWithoutMoviesInput;
  MovieCrewMemberWhereInput: MovieCrewMemberWhereInput;
  MovieCrewMemberWhereUniqueInput: MovieCrewMemberWhereUniqueInput;
  MovieGroupBy: ResolverTypeWrapper<MovieGroupBy>;
  MovieInfo: ResolverTypeWrapper<MovieInfo>;
  MovieInfoCreateNestedOneWithoutMovieInput: MovieInfoCreateNestedOneWithoutMovieInput;
  MovieInfoCreateOrConnectWithoutMovieInput: MovieInfoCreateOrConnectWithoutMovieInput;
  MovieInfoCreateWithoutMovieInput: MovieInfoCreateWithoutMovieInput;
  MovieInfoCreatealternativeTitlesInput: MovieInfoCreatealternativeTitlesInput;
  MovieInfoNullableRelationFilter: MovieInfoNullableRelationFilter;
  MovieInfoOrderByRelevanceFieldEnum: MovieInfoOrderByRelevanceFieldEnum;
  MovieInfoOrderByRelevanceInput: MovieInfoOrderByRelevanceInput;
  MovieInfoOrderByWithRelationAndSearchRelevanceInput: MovieInfoOrderByWithRelationAndSearchRelevanceInput;
  MovieInfoUpdateOneWithoutMovieNestedInput: MovieInfoUpdateOneWithoutMovieNestedInput;
  MovieInfoUpdateToOneWithWhereWithoutMovieInput: MovieInfoUpdateToOneWithWhereWithoutMovieInput;
  MovieInfoUpdateWithoutMovieInput: MovieInfoUpdateWithoutMovieInput;
  MovieInfoUpdatealternativeTitlesInput: MovieInfoUpdatealternativeTitlesInput;
  MovieInfoUpsertWithoutMovieInput: MovieInfoUpsertWithoutMovieInput;
  MovieInfoWhereInput: MovieInfoWhereInput;
  MovieInfoWhereUniqueInput: MovieInfoWhereUniqueInput;
  MovieKeywordCategory: ResolverTypeWrapper<MovieKeywordCategory>;
  MovieKeywordCategoryCount: ResolverTypeWrapper<MovieKeywordCategoryCount>;
  MovieKeywordCategoryCreateNestedManyWithoutMoviesInput: MovieKeywordCategoryCreateNestedManyWithoutMoviesInput;
  MovieKeywordCategoryCreateOrConnectWithoutMoviesInput: MovieKeywordCategoryCreateOrConnectWithoutMoviesInput;
  MovieKeywordCategoryCreateWithoutMoviesInput: MovieKeywordCategoryCreateWithoutMoviesInput;
  MovieKeywordCategoryListRelationFilter: MovieKeywordCategoryListRelationFilter;
  MovieKeywordCategoryOrderByRelationAggregateInput: MovieKeywordCategoryOrderByRelationAggregateInput;
  MovieKeywordCategoryOrderByRelevanceFieldEnum: MovieKeywordCategoryOrderByRelevanceFieldEnum;
  MovieKeywordCategoryOrderByRelevanceInput: MovieKeywordCategoryOrderByRelevanceInput;
  MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput: MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput;
  MovieKeywordCategoryScalarFieldEnum: MovieKeywordCategoryScalarFieldEnum;
  MovieKeywordCategoryScalarWhereInput: MovieKeywordCategoryScalarWhereInput;
  MovieKeywordCategoryUpdateManyMutationInput: MovieKeywordCategoryUpdateManyMutationInput;
  MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput: MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput;
  MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput: MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput;
  MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryUpdateWithoutMoviesInput: MovieKeywordCategoryUpdateWithoutMoviesInput;
  MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryWhereInput: MovieKeywordCategoryWhereInput;
  MovieKeywordCategoryWhereUniqueInput: MovieKeywordCategoryWhereUniqueInput;
  MovieLikedByUser: ResolverTypeWrapper<MovieLikedByUser>;
  MovieLikedByUserCountAggregate: ResolverTypeWrapper<MovieLikedByUserCountAggregate>;
  MovieLikedByUserCountOrderByAggregateInput: MovieLikedByUserCountOrderByAggregateInput;
  MovieLikedByUserCreateInput: MovieLikedByUserCreateInput;
  MovieLikedByUserCreateManyInput: MovieLikedByUserCreateManyInput;
  MovieLikedByUserCreateManyMovieInput: MovieLikedByUserCreateManyMovieInput;
  MovieLikedByUserCreateManyMovieInputEnvelope: MovieLikedByUserCreateManyMovieInputEnvelope;
  MovieLikedByUserCreateManyUserInput: MovieLikedByUserCreateManyUserInput;
  MovieLikedByUserCreateManyUserInputEnvelope: MovieLikedByUserCreateManyUserInputEnvelope;
  MovieLikedByUserCreateNestedManyWithoutMovieInput: MovieLikedByUserCreateNestedManyWithoutMovieInput;
  MovieLikedByUserCreateNestedManyWithoutUserInput: MovieLikedByUserCreateNestedManyWithoutUserInput;
  MovieLikedByUserCreateOrConnectWithoutMovieInput: MovieLikedByUserCreateOrConnectWithoutMovieInput;
  MovieLikedByUserCreateOrConnectWithoutUserInput: MovieLikedByUserCreateOrConnectWithoutUserInput;
  MovieLikedByUserCreateWithoutMovieInput: MovieLikedByUserCreateWithoutMovieInput;
  MovieLikedByUserCreateWithoutUserInput: MovieLikedByUserCreateWithoutUserInput;
  MovieLikedByUserGroupBy: ResolverTypeWrapper<MovieLikedByUserGroupBy>;
  MovieLikedByUserListRelationFilter: MovieLikedByUserListRelationFilter;
  MovieLikedByUserMaxAggregate: ResolverTypeWrapper<MovieLikedByUserMaxAggregate>;
  MovieLikedByUserMaxOrderByAggregateInput: MovieLikedByUserMaxOrderByAggregateInput;
  MovieLikedByUserMinAggregate: ResolverTypeWrapper<MovieLikedByUserMinAggregate>;
  MovieLikedByUserMinOrderByAggregateInput: MovieLikedByUserMinOrderByAggregateInput;
  MovieLikedByUserOrderByRelationAggregateInput: MovieLikedByUserOrderByRelationAggregateInput;
  MovieLikedByUserOrderByRelevanceFieldEnum: MovieLikedByUserOrderByRelevanceFieldEnum;
  MovieLikedByUserOrderByRelevanceInput: MovieLikedByUserOrderByRelevanceInput;
  MovieLikedByUserOrderByWithAggregationInput: MovieLikedByUserOrderByWithAggregationInput;
  MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieLikedByUserScalarFieldEnum: MovieLikedByUserScalarFieldEnum;
  MovieLikedByUserScalarWhereInput: MovieLikedByUserScalarWhereInput;
  MovieLikedByUserScalarWhereWithAggregatesInput: MovieLikedByUserScalarWhereWithAggregatesInput;
  MovieLikedByUserUpdateInput: MovieLikedByUserUpdateInput;
  MovieLikedByUserUpdateManyMutationInput: MovieLikedByUserUpdateManyMutationInput;
  MovieLikedByUserUpdateManyWithWhereWithoutMovieInput: MovieLikedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieLikedByUserUpdateManyWithWhereWithoutUserInput: MovieLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieLikedByUserUpdateManyWithoutMovieNestedInput: MovieLikedByUserUpdateManyWithoutMovieNestedInput;
  MovieLikedByUserUpdateManyWithoutUserNestedInput: MovieLikedByUserUpdateManyWithoutUserNestedInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUpdateWithoutMovieInput: MovieLikedByUserUpdateWithoutMovieInput;
  MovieLikedByUserUpdateWithoutUserInput: MovieLikedByUserUpdateWithoutUserInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUserIdMovieIdCompoundUniqueInput: MovieLikedByUserUserIdMovieIdCompoundUniqueInput;
  MovieLikedByUserWhereInput: MovieLikedByUserWhereInput;
  MovieLikedByUserWhereUniqueInput: MovieLikedByUserWhereUniqueInput;
  MovieList: ResolverTypeWrapper<MovieList>;
  MovieListCommentCreateManyMovieListInput: MovieListCommentCreateManyMovieListInput;
  MovieListCommentCreateManyMovieListInputEnvelope: MovieListCommentCreateManyMovieListInputEnvelope;
  MovieListCommentCreateManyUserInput: MovieListCommentCreateManyUserInput;
  MovieListCommentCreateManyUserInputEnvelope: MovieListCommentCreateManyUserInputEnvelope;
  MovieListCommentCreateNestedManyWithoutMovieListInput: MovieListCommentCreateNestedManyWithoutMovieListInput;
  MovieListCommentCreateNestedManyWithoutUserInput: MovieListCommentCreateNestedManyWithoutUserInput;
  MovieListCommentCreateOrConnectWithoutMovieListInput: MovieListCommentCreateOrConnectWithoutMovieListInput;
  MovieListCommentCreateOrConnectWithoutUserInput: MovieListCommentCreateOrConnectWithoutUserInput;
  MovieListCommentCreateWithoutMovieListInput: MovieListCommentCreateWithoutMovieListInput;
  MovieListCommentCreateWithoutUserInput: MovieListCommentCreateWithoutUserInput;
  MovieListCommentListRelationFilter: MovieListCommentListRelationFilter;
  MovieListCommentOrderByRelationAggregateInput: MovieListCommentOrderByRelationAggregateInput;
  MovieListCommentScalarWhereInput: MovieListCommentScalarWhereInput;
  MovieListCommentUpdateManyMutationInput: MovieListCommentUpdateManyMutationInput;
  MovieListCommentUpdateManyWithWhereWithoutMovieListInput: MovieListCommentUpdateManyWithWhereWithoutMovieListInput;
  MovieListCommentUpdateManyWithWhereWithoutUserInput: MovieListCommentUpdateManyWithWhereWithoutUserInput;
  MovieListCommentUpdateManyWithoutMovieListNestedInput: MovieListCommentUpdateManyWithoutMovieListNestedInput;
  MovieListCommentUpdateManyWithoutUserNestedInput: MovieListCommentUpdateManyWithoutUserNestedInput;
  MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput: MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpdateWithWhereUniqueWithoutUserInput: MovieListCommentUpdateWithWhereUniqueWithoutUserInput;
  MovieListCommentUpdateWithoutMovieListInput: MovieListCommentUpdateWithoutMovieListInput;
  MovieListCommentUpdateWithoutUserInput: MovieListCommentUpdateWithoutUserInput;
  MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput: MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpsertWithWhereUniqueWithoutUserInput: MovieListCommentUpsertWithWhereUniqueWithoutUserInput;
  MovieListCommentWhereInput: MovieListCommentWhereInput;
  MovieListCommentWhereUniqueInput: MovieListCommentWhereUniqueInput;
  MovieListCount: ResolverTypeWrapper<MovieListCount>;
  MovieListCreateManyMovieListAuthorInput: MovieListCreateManyMovieListAuthorInput;
  MovieListCreateManyMovieListAuthorInputEnvelope: MovieListCreateManyMovieListAuthorInputEnvelope;
  MovieListCreateNestedManyWithoutMovieListAuthorInput: MovieListCreateNestedManyWithoutMovieListAuthorInput;
  MovieListCreateNestedManyWithoutMoviesInput: MovieListCreateNestedManyWithoutMoviesInput;
  MovieListCreateNestedOneWithoutCommentsInput: MovieListCreateNestedOneWithoutCommentsInput;
  MovieListCreateNestedOneWithoutLikedByInput: MovieListCreateNestedOneWithoutLikedByInput;
  MovieListCreateOrConnectWithoutCommentsInput: MovieListCreateOrConnectWithoutCommentsInput;
  MovieListCreateOrConnectWithoutLikedByInput: MovieListCreateOrConnectWithoutLikedByInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutCommentsInput: MovieListCreateWithoutCommentsInput;
  MovieListCreateWithoutLikedByInput: MovieListCreateWithoutLikedByInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
  MovieListCreatetagsInput: MovieListCreatetagsInput;
  MovieListLikedByUserCreateManyMovieListInput: MovieListLikedByUserCreateManyMovieListInput;
  MovieListLikedByUserCreateManyMovieListInputEnvelope: MovieListLikedByUserCreateManyMovieListInputEnvelope;
  MovieListLikedByUserCreateManyUserInput: MovieListLikedByUserCreateManyUserInput;
  MovieListLikedByUserCreateManyUserInputEnvelope: MovieListLikedByUserCreateManyUserInputEnvelope;
  MovieListLikedByUserCreateNestedManyWithoutMovieListInput: MovieListLikedByUserCreateNestedManyWithoutMovieListInput;
  MovieListLikedByUserCreateNestedManyWithoutUserInput: MovieListLikedByUserCreateNestedManyWithoutUserInput;
  MovieListLikedByUserCreateOrConnectWithoutMovieListInput: MovieListLikedByUserCreateOrConnectWithoutMovieListInput;
  MovieListLikedByUserCreateOrConnectWithoutUserInput: MovieListLikedByUserCreateOrConnectWithoutUserInput;
  MovieListLikedByUserCreateWithoutMovieListInput: MovieListLikedByUserCreateWithoutMovieListInput;
  MovieListLikedByUserCreateWithoutUserInput: MovieListLikedByUserCreateWithoutUserInput;
  MovieListLikedByUserListRelationFilter: MovieListLikedByUserListRelationFilter;
  MovieListLikedByUserOrderByRelationAggregateInput: MovieListLikedByUserOrderByRelationAggregateInput;
  MovieListLikedByUserScalarWhereInput: MovieListLikedByUserScalarWhereInput;
  MovieListLikedByUserUpdateManyMutationInput: MovieListLikedByUserUpdateManyMutationInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput: MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutUserInput: MovieListLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieListLikedByUserUpdateManyWithoutMovieListNestedInput: MovieListLikedByUserUpdateManyWithoutMovieListNestedInput;
  MovieListLikedByUserUpdateManyWithoutUserNestedInput: MovieListLikedByUserUpdateManyWithoutUserNestedInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUpdateWithoutMovieListInput: MovieListLikedByUserUpdateWithoutMovieListInput;
  MovieListLikedByUserUpdateWithoutUserInput: MovieListLikedByUserUpdateWithoutUserInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput: MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput;
  MovieListLikedByUserWhereInput: MovieListLikedByUserWhereInput;
  MovieListLikedByUserWhereUniqueInput: MovieListLikedByUserWhereUniqueInput;
  MovieListListRelationFilter: MovieListListRelationFilter;
  MovieListOrderByRelationAggregateInput: MovieListOrderByRelationAggregateInput;
  MovieListOrderByRelevanceFieldEnum: MovieListOrderByRelevanceFieldEnum;
  MovieListOrderByRelevanceInput: MovieListOrderByRelevanceInput;
  MovieListOrderByWithRelationAndSearchRelevanceInput: MovieListOrderByWithRelationAndSearchRelevanceInput;
  MovieListRelationFilter: MovieListRelationFilter;
  MovieListScalarFieldEnum: MovieListScalarFieldEnum;
  MovieListScalarWhereInput: MovieListScalarWhereInput;
  MovieListStatsCreateNestedOneWithoutMovieListInput: MovieListStatsCreateNestedOneWithoutMovieListInput;
  MovieListStatsCreateOrConnectWithoutMovieListInput: MovieListStatsCreateOrConnectWithoutMovieListInput;
  MovieListStatsCreateWithoutMovieListInput: MovieListStatsCreateWithoutMovieListInput;
  MovieListStatsNullableRelationFilter: MovieListStatsNullableRelationFilter;
  MovieListStatsOrderByRelevanceFieldEnum: MovieListStatsOrderByRelevanceFieldEnum;
  MovieListStatsOrderByRelevanceInput: MovieListStatsOrderByRelevanceInput;
  MovieListStatsOrderByWithRelationAndSearchRelevanceInput: MovieListStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieListStatsUpdateOneWithoutMovieListNestedInput: MovieListStatsUpdateOneWithoutMovieListNestedInput;
  MovieListStatsUpdateToOneWithWhereWithoutMovieListInput: MovieListStatsUpdateToOneWithWhereWithoutMovieListInput;
  MovieListStatsUpdateWithoutMovieListInput: MovieListStatsUpdateWithoutMovieListInput;
  MovieListStatsUpsertWithoutMovieListInput: MovieListStatsUpsertWithoutMovieListInput;
  MovieListStatsWhereInput: MovieListStatsWhereInput;
  MovieListStatsWhereUniqueInput: MovieListStatsWhereUniqueInput;
  MovieListUpdateManyMutationInput: MovieListUpdateManyMutationInput;
  MovieListUpdateManyWithWhereWithoutMovieListAuthorInput: MovieListUpdateManyWithWhereWithoutMovieListAuthorInput;
  MovieListUpdateManyWithWhereWithoutMoviesInput: MovieListUpdateManyWithWhereWithoutMoviesInput;
  MovieListUpdateManyWithoutMovieListAuthorNestedInput: MovieListUpdateManyWithoutMovieListAuthorNestedInput;
  MovieListUpdateManyWithoutMoviesNestedInput: MovieListUpdateManyWithoutMoviesNestedInput;
  MovieListUpdateOneRequiredWithoutCommentsNestedInput: MovieListUpdateOneRequiredWithoutCommentsNestedInput;
  MovieListUpdateOneRequiredWithoutLikedByNestedInput: MovieListUpdateOneRequiredWithoutLikedByNestedInput;
  MovieListUpdateToOneWithWhereWithoutCommentsInput: MovieListUpdateToOneWithWhereWithoutCommentsInput;
  MovieListUpdateToOneWithWhereWithoutLikedByInput: MovieListUpdateToOneWithWhereWithoutLikedByInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutCommentsInput: MovieListUpdateWithoutCommentsInput;
  MovieListUpdateWithoutLikedByInput: MovieListUpdateWithoutLikedByInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpdatetagsInput: MovieListUpdatetagsInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutCommentsInput: MovieListUpsertWithoutCommentsInput;
  MovieListUpsertWithoutLikedByInput: MovieListUpsertWithoutLikedByInput;
  MovieListWhereInput: MovieListWhereInput;
  MovieListWhereUniqueInput: MovieListWhereUniqueInput;
  MovieMaxAggregate: ResolverTypeWrapper<MovieMaxAggregate>;
  MovieMaxOrderByAggregateInput: MovieMaxOrderByAggregateInput;
  MovieMinAggregate: ResolverTypeWrapper<MovieMinAggregate>;
  MovieMinOrderByAggregateInput: MovieMinOrderByAggregateInput;
  MovieOrderByRelationAggregateInput: MovieOrderByRelationAggregateInput;
  MovieOrderByRelevanceFieldEnum: MovieOrderByRelevanceFieldEnum;
  MovieOrderByRelevanceInput: MovieOrderByRelevanceInput;
  MovieOrderByWithAggregationInput: MovieOrderByWithAggregationInput;
  MovieOrderByWithRelationAndSearchRelevanceInput: MovieOrderByWithRelationAndSearchRelevanceInput;
  MovieRating: ResolverTypeWrapper<MovieRating>;
  MovieRatingAvgAggregate: ResolverTypeWrapper<MovieRatingAvgAggregate>;
  MovieRatingAvgOrderByAggregateInput: MovieRatingAvgOrderByAggregateInput;
  MovieRatingCountAggregate: ResolverTypeWrapper<MovieRatingCountAggregate>;
  MovieRatingCountOrderByAggregateInput: MovieRatingCountOrderByAggregateInput;
  MovieRatingCreateInput: MovieRatingCreateInput;
  MovieRatingCreateManyInput: MovieRatingCreateManyInput;
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateNestedOneWithoutReviewInput: MovieRatingCreateNestedOneWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutReviewInput: MovieRatingCreateOrConnectWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutReviewInput: MovieRatingCreateWithoutReviewInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingGroupBy: ResolverTypeWrapper<MovieRatingGroupBy>;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingMaxAggregate: ResolverTypeWrapper<MovieRatingMaxAggregate>;
  MovieRatingMaxOrderByAggregateInput: MovieRatingMaxOrderByAggregateInput;
  MovieRatingMinAggregate: ResolverTypeWrapper<MovieRatingMinAggregate>;
  MovieRatingMinOrderByAggregateInput: MovieRatingMinOrderByAggregateInput;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceFieldEnum: MovieRatingOrderByRelevanceFieldEnum;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithAggregationInput: MovieRatingOrderByWithAggregationInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarFieldEnum: MovieRatingScalarFieldEnum;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingScalarWhereWithAggregatesInput: MovieRatingScalarWhereWithAggregatesInput;
  MovieRatingSumAggregate: ResolverTypeWrapper<MovieRatingSumAggregate>;
  MovieRatingSumOrderByAggregateInput: MovieRatingSumOrderByAggregateInput;
  MovieRatingUpdateInput: MovieRatingUpdateInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateOneRequiredWithoutReviewNestedInput: MovieRatingUpdateOneRequiredWithoutReviewNestedInput;
  MovieRatingUpdateToOneWithWhereWithoutReviewInput: MovieRatingUpdateToOneWithWhereWithoutReviewInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutReviewInput: MovieRatingUpdateWithoutReviewInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingUpsertWithoutReviewInput: MovieRatingUpsertWithoutReviewInput;
  MovieRatingUserIdMovieIdCompoundUniqueInput: MovieRatingUserIdMovieIdCompoundUniqueInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReview: ResolverTypeWrapper<MovieReview>;
  MovieReviewCount: ResolverTypeWrapper<MovieReviewCount>;
  MovieReviewCountAggregate: ResolverTypeWrapper<MovieReviewCountAggregate>;
  MovieReviewCountOrderByAggregateInput: MovieReviewCountOrderByAggregateInput;
  MovieReviewCreateInput: MovieReviewCreateInput;
  MovieReviewCreateManyInput: MovieReviewCreateManyInput;
  MovieReviewCreateNestedOneWithoutLikedByInput: MovieReviewCreateNestedOneWithoutLikedByInput;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutLikedByInput: MovieReviewCreateOrConnectWithoutLikedByInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutLikedByInput: MovieReviewCreateWithoutLikedByInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewGroupBy: ResolverTypeWrapper<MovieReviewGroupBy>;
  MovieReviewLikedByUser: ResolverTypeWrapper<MovieReviewLikedByUser>;
  MovieReviewLikedByUserCountAggregate: ResolverTypeWrapper<MovieReviewLikedByUserCountAggregate>;
  MovieReviewLikedByUserCountOrderByAggregateInput: MovieReviewLikedByUserCountOrderByAggregateInput;
  MovieReviewLikedByUserCreateInput: MovieReviewLikedByUserCreateInput;
  MovieReviewLikedByUserCreateManyInput: MovieReviewLikedByUserCreateManyInput;
  MovieReviewLikedByUserCreateManyMovieReviewInput: MovieReviewLikedByUserCreateManyMovieReviewInput;
  MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope;
  MovieReviewLikedByUserCreateManyUserInput: MovieReviewLikedByUserCreateManyUserInput;
  MovieReviewLikedByUserCreateManyUserInputEnvelope: MovieReviewLikedByUserCreateManyUserInputEnvelope;
  MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput: MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateNestedManyWithoutUserInput: MovieReviewLikedByUserCreateNestedManyWithoutUserInput;
  MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateOrConnectWithoutUserInput: MovieReviewLikedByUserCreateOrConnectWithoutUserInput;
  MovieReviewLikedByUserCreateWithoutMovieReviewInput: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateWithoutUserInput: MovieReviewLikedByUserCreateWithoutUserInput;
  MovieReviewLikedByUserGroupBy: ResolverTypeWrapper<MovieReviewLikedByUserGroupBy>;
  MovieReviewLikedByUserListRelationFilter: MovieReviewLikedByUserListRelationFilter;
  MovieReviewLikedByUserMaxAggregate: ResolverTypeWrapper<MovieReviewLikedByUserMaxAggregate>;
  MovieReviewLikedByUserMaxOrderByAggregateInput: MovieReviewLikedByUserMaxOrderByAggregateInput;
  MovieReviewLikedByUserMinAggregate: ResolverTypeWrapper<MovieReviewLikedByUserMinAggregate>;
  MovieReviewLikedByUserMinOrderByAggregateInput: MovieReviewLikedByUserMinOrderByAggregateInput;
  MovieReviewLikedByUserOrderByRelationAggregateInput: MovieReviewLikedByUserOrderByRelationAggregateInput;
  MovieReviewLikedByUserOrderByRelevanceFieldEnum: MovieReviewLikedByUserOrderByRelevanceFieldEnum;
  MovieReviewLikedByUserOrderByRelevanceInput: MovieReviewLikedByUserOrderByRelevanceInput;
  MovieReviewLikedByUserOrderByWithAggregationInput: MovieReviewLikedByUserOrderByWithAggregationInput;
  MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewLikedByUserScalarFieldEnum: MovieReviewLikedByUserScalarFieldEnum;
  MovieReviewLikedByUserScalarWhereInput: MovieReviewLikedByUserScalarWhereInput;
  MovieReviewLikedByUserScalarWhereWithAggregatesInput: MovieReviewLikedByUserScalarWhereWithAggregatesInput;
  MovieReviewLikedByUserUpdateInput: MovieReviewLikedByUserUpdateInput;
  MovieReviewLikedByUserUpdateManyMutationInput: MovieReviewLikedByUserUpdateManyMutationInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput: MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput;
  MovieReviewLikedByUserUpdateManyWithoutUserNestedInput: MovieReviewLikedByUserUpdateManyWithoutUserNestedInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUpdateWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithoutUserInput: MovieReviewLikedByUserUpdateWithoutUserInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput: MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput;
  MovieReviewLikedByUserWhereInput: MovieReviewLikedByUserWhereInput;
  MovieReviewLikedByUserWhereUniqueInput: MovieReviewLikedByUserWhereUniqueInput;
  MovieReviewMaxAggregate: ResolverTypeWrapper<MovieReviewMaxAggregate>;
  MovieReviewMaxOrderByAggregateInput: MovieReviewMaxOrderByAggregateInput;
  MovieReviewMinAggregate: ResolverTypeWrapper<MovieReviewMinAggregate>;
  MovieReviewMinOrderByAggregateInput: MovieReviewMinOrderByAggregateInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceFieldEnum: MovieReviewOrderByRelevanceFieldEnum;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithAggregationInput: MovieReviewOrderByWithAggregationInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewRelationFilter: MovieReviewRelationFilter;
  MovieReviewScalarFieldEnum: MovieReviewScalarFieldEnum;
  MovieReviewScalarWhereWithAggregatesInput: MovieReviewScalarWhereWithAggregatesInput;
  MovieReviewUpdateInput: MovieReviewUpdateInput;
  MovieReviewUpdateManyMutationInput: MovieReviewUpdateManyMutationInput;
  MovieReviewUpdateOneRequiredWithoutLikedByNestedInput: MovieReviewUpdateOneRequiredWithoutLikedByNestedInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutLikedByInput: MovieReviewUpdateToOneWithWhereWithoutLikedByInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutLikedByInput: MovieReviewUpdateWithoutLikedByInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
  MovieReviewUpsertWithoutLikedByInput: MovieReviewUpsertWithoutLikedByInput;
  MovieReviewUpsertWithoutRatingInput: MovieReviewUpsertWithoutRatingInput;
  MovieReviewWhereInput: MovieReviewWhereInput;
  MovieReviewWhereUniqueInput: MovieReviewWhereUniqueInput;
  MovieScalarFieldEnum: MovieScalarFieldEnum;
  MovieScalarWhereInput: MovieScalarWhereInput;
  MovieScalarWhereWithAggregatesInput: MovieScalarWhereWithAggregatesInput;
  MovieSpokenLanguage: ResolverTypeWrapper<MovieSpokenLanguage>;
  MovieSpokenLanguageCount: ResolverTypeWrapper<MovieSpokenLanguageCount>;
  MovieSpokenLanguageCreateNestedManyWithoutMoviesInput: MovieSpokenLanguageCreateNestedManyWithoutMoviesInput;
  MovieSpokenLanguageCreateOrConnectWithoutMoviesInput: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput;
  MovieSpokenLanguageCreateWithoutMoviesInput: MovieSpokenLanguageCreateWithoutMoviesInput;
  MovieSpokenLanguageListRelationFilter: MovieSpokenLanguageListRelationFilter;
  MovieSpokenLanguageOrderByRelationAggregateInput: MovieSpokenLanguageOrderByRelationAggregateInput;
  MovieSpokenLanguageOrderByRelevanceFieldEnum: MovieSpokenLanguageOrderByRelevanceFieldEnum;
  MovieSpokenLanguageOrderByRelevanceInput: MovieSpokenLanguageOrderByRelevanceInput;
  MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput: MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput;
  MovieSpokenLanguageScalarFieldEnum: MovieSpokenLanguageScalarFieldEnum;
  MovieSpokenLanguageScalarWhereInput: MovieSpokenLanguageScalarWhereInput;
  MovieSpokenLanguageUpdateManyMutationInput: MovieSpokenLanguageUpdateManyMutationInput;
  MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput: MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput;
  MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput: MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput;
  MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageUpdateWithoutMoviesInput: MovieSpokenLanguageUpdateWithoutMoviesInput;
  MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageWhereInput: MovieSpokenLanguageWhereInput;
  MovieSpokenLanguageWhereUniqueInput: MovieSpokenLanguageWhereUniqueInput;
  MovieStats: ResolverTypeWrapper<MovieStats>;
  MovieStatsCreateNestedOneWithoutMovieInput: MovieStatsCreateNestedOneWithoutMovieInput;
  MovieStatsCreateOrConnectWithoutMovieInput: MovieStatsCreateOrConnectWithoutMovieInput;
  MovieStatsCreateWithoutMovieInput: MovieStatsCreateWithoutMovieInput;
  MovieStatsNullableRelationFilter: MovieStatsNullableRelationFilter;
  MovieStatsOrderByRelevanceFieldEnum: MovieStatsOrderByRelevanceFieldEnum;
  MovieStatsOrderByRelevanceInput: MovieStatsOrderByRelevanceInput;
  MovieStatsOrderByWithRelationAndSearchRelevanceInput: MovieStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieStatsUpdateOneWithoutMovieNestedInput: MovieStatsUpdateOneWithoutMovieNestedInput;
  MovieStatsUpdateToOneWithWhereWithoutMovieInput: MovieStatsUpdateToOneWithWhereWithoutMovieInput;
  MovieStatsUpdateWithoutMovieInput: MovieStatsUpdateWithoutMovieInput;
  MovieStatsUpsertWithoutMovieInput: MovieStatsUpsertWithoutMovieInput;
  MovieStatsWhereInput: MovieStatsWhereInput;
  MovieStatsWhereUniqueInput: MovieStatsWhereUniqueInput;
  MovieStudio: ResolverTypeWrapper<MovieStudio>;
  MovieStudioCount: ResolverTypeWrapper<MovieStudioCount>;
  MovieStudioCreateNestedManyWithoutMoviesInput: MovieStudioCreateNestedManyWithoutMoviesInput;
  MovieStudioCreateOrConnectWithoutMoviesInput: MovieStudioCreateOrConnectWithoutMoviesInput;
  MovieStudioCreateWithoutMoviesInput: MovieStudioCreateWithoutMoviesInput;
  MovieStudioListRelationFilter: MovieStudioListRelationFilter;
  MovieStudioOrderByRelationAggregateInput: MovieStudioOrderByRelationAggregateInput;
  MovieStudioOrderByRelevanceFieldEnum: MovieStudioOrderByRelevanceFieldEnum;
  MovieStudioOrderByRelevanceInput: MovieStudioOrderByRelevanceInput;
  MovieStudioOrderByWithRelationAndSearchRelevanceInput: MovieStudioOrderByWithRelationAndSearchRelevanceInput;
  MovieStudioScalarFieldEnum: MovieStudioScalarFieldEnum;
  MovieStudioScalarWhereInput: MovieStudioScalarWhereInput;
  MovieStudioUpdateManyMutationInput: MovieStudioUpdateManyMutationInput;
  MovieStudioUpdateManyWithWhereWithoutMoviesInput: MovieStudioUpdateManyWithWhereWithoutMoviesInput;
  MovieStudioUpdateManyWithoutMoviesNestedInput: MovieStudioUpdateManyWithoutMoviesNestedInput;
  MovieStudioUpdateWithWhereUniqueWithoutMoviesInput: MovieStudioUpdateWithWhereUniqueWithoutMoviesInput;
  MovieStudioUpdateWithoutMoviesInput: MovieStudioUpdateWithoutMoviesInput;
  MovieStudioUpsertWithWhereUniqueWithoutMoviesInput: MovieStudioUpsertWithWhereUniqueWithoutMoviesInput;
  MovieStudioWhereInput: MovieStudioWhereInput;
  MovieStudioWhereUniqueInput: MovieStudioWhereUniqueInput;
  MovieUpdateInput: MovieUpdateInput;
  MovieUpdateManyMutationInput: MovieUpdateManyMutationInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput: MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput;
  MovieUpdateOneRequiredWithoutLikedByNestedInput: MovieUpdateOneRequiredWithoutLikedByNestedInput;
  MovieUpdateOneRequiredWithoutRatedByNestedInput: MovieUpdateOneRequiredWithoutRatedByNestedInput;
  MovieUpdateOneRequiredWithoutWatchedByNestedInput: MovieUpdateOneRequiredWithoutWatchedByNestedInput;
  MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput: MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateToOneWithWhereWithoutLikedByInput: MovieUpdateToOneWithWhereWithoutLikedByInput;
  MovieUpdateToOneWithWhereWithoutRatedByInput: MovieUpdateToOneWithWhereWithoutRatedByInput;
  MovieUpdateToOneWithWhereWithoutWatchedByInput: MovieUpdateToOneWithWhereWithoutWatchedByInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutLikedByInput: MovieUpdateWithoutLikedByInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatedByInput: MovieUpdateWithoutRatedByInput;
  MovieUpdateWithoutWatchedByInput: MovieUpdateWithoutWatchedByInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithoutInWatchlistByUsersInput: MovieUpsertWithoutInWatchlistByUsersInput;
  MovieUpsertWithoutLikedByInput: MovieUpsertWithoutLikedByInput;
  MovieUpsertWithoutRatedByInput: MovieUpsertWithoutRatedByInput;
  MovieUpsertWithoutWatchedByInput: MovieUpsertWithoutWatchedByInput;
  MovieWatchedByUser: ResolverTypeWrapper<MovieWatchedByUser>;
  MovieWatchedByUserCountAggregate: ResolverTypeWrapper<MovieWatchedByUserCountAggregate>;
  MovieWatchedByUserCountOrderByAggregateInput: MovieWatchedByUserCountOrderByAggregateInput;
  MovieWatchedByUserCreateInput: MovieWatchedByUserCreateInput;
  MovieWatchedByUserCreateManyInput: MovieWatchedByUserCreateManyInput;
  MovieWatchedByUserCreateManyMovieInput: MovieWatchedByUserCreateManyMovieInput;
  MovieWatchedByUserCreateManyMovieInputEnvelope: MovieWatchedByUserCreateManyMovieInputEnvelope;
  MovieWatchedByUserCreateManyUserInput: MovieWatchedByUserCreateManyUserInput;
  MovieWatchedByUserCreateManyUserInputEnvelope: MovieWatchedByUserCreateManyUserInputEnvelope;
  MovieWatchedByUserCreateNestedManyWithoutMovieInput: MovieWatchedByUserCreateNestedManyWithoutMovieInput;
  MovieWatchedByUserCreateNestedManyWithoutUserInput: MovieWatchedByUserCreateNestedManyWithoutUserInput;
  MovieWatchedByUserCreateOrConnectWithoutMovieInput: MovieWatchedByUserCreateOrConnectWithoutMovieInput;
  MovieWatchedByUserCreateOrConnectWithoutUserInput: MovieWatchedByUserCreateOrConnectWithoutUserInput;
  MovieWatchedByUserCreateWithoutMovieInput: MovieWatchedByUserCreateWithoutMovieInput;
  MovieWatchedByUserCreateWithoutUserInput: MovieWatchedByUserCreateWithoutUserInput;
  MovieWatchedByUserGroupBy: ResolverTypeWrapper<MovieWatchedByUserGroupBy>;
  MovieWatchedByUserListRelationFilter: MovieWatchedByUserListRelationFilter;
  MovieWatchedByUserMaxAggregate: ResolverTypeWrapper<MovieWatchedByUserMaxAggregate>;
  MovieWatchedByUserMaxOrderByAggregateInput: MovieWatchedByUserMaxOrderByAggregateInput;
  MovieWatchedByUserMinAggregate: ResolverTypeWrapper<MovieWatchedByUserMinAggregate>;
  MovieWatchedByUserMinOrderByAggregateInput: MovieWatchedByUserMinOrderByAggregateInput;
  MovieWatchedByUserOrderByRelationAggregateInput: MovieWatchedByUserOrderByRelationAggregateInput;
  MovieWatchedByUserOrderByRelevanceFieldEnum: MovieWatchedByUserOrderByRelevanceFieldEnum;
  MovieWatchedByUserOrderByRelevanceInput: MovieWatchedByUserOrderByRelevanceInput;
  MovieWatchedByUserOrderByWithAggregationInput: MovieWatchedByUserOrderByWithAggregationInput;
  MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput: MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieWatchedByUserScalarFieldEnum: MovieWatchedByUserScalarFieldEnum;
  MovieWatchedByUserScalarWhereInput: MovieWatchedByUserScalarWhereInput;
  MovieWatchedByUserScalarWhereWithAggregatesInput: MovieWatchedByUserScalarWhereWithAggregatesInput;
  MovieWatchedByUserUpdateInput: MovieWatchedByUserUpdateInput;
  MovieWatchedByUserUpdateManyMutationInput: MovieWatchedByUserUpdateManyMutationInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput: MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutUserInput: MovieWatchedByUserUpdateManyWithWhereWithoutUserInput;
  MovieWatchedByUserUpdateManyWithoutMovieNestedInput: MovieWatchedByUserUpdateManyWithoutMovieNestedInput;
  MovieWatchedByUserUpdateManyWithoutUserNestedInput: MovieWatchedByUserUpdateManyWithoutUserNestedInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUpdateWithoutMovieInput: MovieWatchedByUserUpdateWithoutMovieInput;
  MovieWatchedByUserUpdateWithoutUserInput: MovieWatchedByUserUpdateWithoutUserInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUserIdMovieIdCompoundUniqueInput: MovieWatchedByUserUserIdMovieIdCompoundUniqueInput;
  MovieWatchedByUserWhereInput: MovieWatchedByUserWhereInput;
  MovieWatchedByUserWhereUniqueInput: MovieWatchedByUserWhereUniqueInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MoviefireAppUserRole: MoviefireAppUserRole;
  MoviesSearchCriteriaInput: MoviesSearchCriteriaInput;
  MovifierAppUser: ResolverTypeWrapper<MovifierAppUser>;
  MovifierAppUserCount: ResolverTypeWrapper<MovifierAppUserCount>;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateNestedOneWithoutLikedMoviesInput: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatedMoviesInput: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchlistInput: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
  MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateOrConnectWithoutLikedMoviesInput: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput: MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatedMoviesInput: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput: MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutLikedMovieReviewsInput: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateWithoutLikedMoviesInput: MovifierAppUserCreateWithoutLikedMoviesInput;
  MovifierAppUserCreateWithoutMovieListLikedByUserInput: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatedMoviesInput: MovifierAppUserCreateWithoutRatedMoviesInput;
  MovifierAppUserCreateWithoutWatchedMoviesInput: MovifierAppUserCreateWithoutWatchedMoviesInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserOrderByRelevanceFieldEnum: MovifierAppUserOrderByRelevanceFieldEnum;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserScalarFieldEnum: MovifierAppUserScalarFieldEnum;
  MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutLikedMovieReviewsInput: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateWithoutLikedMoviesInput: MovifierAppUserUpdateWithoutLikedMoviesInput;
  MovifierAppUserUpdateWithoutMovieListLikedByUserInput: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatedMoviesInput: MovifierAppUserUpdateWithoutRatedMoviesInput;
  MovifierAppUserUpdateWithoutWatchedMoviesInput: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutLikedMovieReviewsInput: MovifierAppUserUpsertWithoutLikedMovieReviewsInput;
  MovifierAppUserUpsertWithoutLikedMoviesInput: MovifierAppUserUpsertWithoutLikedMoviesInput;
  MovifierAppUserUpsertWithoutMovieListLikedByUserInput: MovifierAppUserUpsertWithoutMovieListLikedByUserInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatedMoviesInput: MovifierAppUserUpsertWithoutRatedMoviesInput;
  MovifierAppUserUpsertWithoutWatchedMoviesInput: MovifierAppUserUpsertWithoutWatchedMoviesInput;
  MovifierAppUserUpsertWithoutWatchlistInput: MovifierAppUserUpsertWithoutWatchlistInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableListFilter: StringNullableListFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  UserLoginInput: UserLoginInput;
  UserLoginOutput: ResolverTypeWrapper<UserLoginOutput>;
  UserMovieWatchlist: ResolverTypeWrapper<UserMovieWatchlist>;
  UserMovieWatchlistCountAggregate: ResolverTypeWrapper<UserMovieWatchlistCountAggregate>;
  UserMovieWatchlistCountOrderByAggregateInput: UserMovieWatchlistCountOrderByAggregateInput;
  UserMovieWatchlistCreateInput: UserMovieWatchlistCreateInput;
  UserMovieWatchlistCreateManyInput: UserMovieWatchlistCreateManyInput;
  UserMovieWatchlistCreateManyMovieInput: UserMovieWatchlistCreateManyMovieInput;
  UserMovieWatchlistCreateManyMovieInputEnvelope: UserMovieWatchlistCreateManyMovieInputEnvelope;
  UserMovieWatchlistCreateManyUserInput: UserMovieWatchlistCreateManyUserInput;
  UserMovieWatchlistCreateManyUserInputEnvelope: UserMovieWatchlistCreateManyUserInputEnvelope;
  UserMovieWatchlistCreateNestedManyWithoutMovieInput: UserMovieWatchlistCreateNestedManyWithoutMovieInput;
  UserMovieWatchlistCreateNestedManyWithoutUserInput: UserMovieWatchlistCreateNestedManyWithoutUserInput;
  UserMovieWatchlistCreateOrConnectWithoutMovieInput: UserMovieWatchlistCreateOrConnectWithoutMovieInput;
  UserMovieWatchlistCreateOrConnectWithoutUserInput: UserMovieWatchlistCreateOrConnectWithoutUserInput;
  UserMovieWatchlistCreateWithoutMovieInput: UserMovieWatchlistCreateWithoutMovieInput;
  UserMovieWatchlistCreateWithoutUserInput: UserMovieWatchlistCreateWithoutUserInput;
  UserMovieWatchlistGroupBy: ResolverTypeWrapper<UserMovieWatchlistGroupBy>;
  UserMovieWatchlistListRelationFilter: UserMovieWatchlistListRelationFilter;
  UserMovieWatchlistMaxAggregate: ResolverTypeWrapper<UserMovieWatchlistMaxAggregate>;
  UserMovieWatchlistMaxOrderByAggregateInput: UserMovieWatchlistMaxOrderByAggregateInput;
  UserMovieWatchlistMinAggregate: ResolverTypeWrapper<UserMovieWatchlistMinAggregate>;
  UserMovieWatchlistMinOrderByAggregateInput: UserMovieWatchlistMinOrderByAggregateInput;
  UserMovieWatchlistOrderByRelationAggregateInput: UserMovieWatchlistOrderByRelationAggregateInput;
  UserMovieWatchlistOrderByRelevanceFieldEnum: UserMovieWatchlistOrderByRelevanceFieldEnum;
  UserMovieWatchlistOrderByRelevanceInput: UserMovieWatchlistOrderByRelevanceInput;
  UserMovieWatchlistOrderByWithAggregationInput: UserMovieWatchlistOrderByWithAggregationInput;
  UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput: UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput;
  UserMovieWatchlistScalarFieldEnum: UserMovieWatchlistScalarFieldEnum;
  UserMovieWatchlistScalarWhereInput: UserMovieWatchlistScalarWhereInput;
  UserMovieWatchlistScalarWhereWithAggregatesInput: UserMovieWatchlistScalarWhereWithAggregatesInput;
  UserMovieWatchlistUpdateInput: UserMovieWatchlistUpdateInput;
  UserMovieWatchlistUpdateManyMutationInput: UserMovieWatchlistUpdateManyMutationInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput: UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutUserInput: UserMovieWatchlistUpdateManyWithWhereWithoutUserInput;
  UserMovieWatchlistUpdateManyWithoutMovieNestedInput: UserMovieWatchlistUpdateManyWithoutMovieNestedInput;
  UserMovieWatchlistUpdateManyWithoutUserNestedInput: UserMovieWatchlistUpdateManyWithoutUserNestedInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUpdateWithoutMovieInput: UserMovieWatchlistUpdateWithoutMovieInput;
  UserMovieWatchlistUpdateWithoutUserInput: UserMovieWatchlistUpdateWithoutUserInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUserIdMovieIdCompoundUniqueInput: UserMovieWatchlistUserIdMovieIdCompoundUniqueInput;
  UserMovieWatchlistWhereInput: UserMovieWatchlistWhereInput;
  UserMovieWatchlistWhereUniqueInput: UserMovieWatchlistWhereUniqueInput;
  UserRegisterOutput: ResolverTypeWrapper<UserRegisterOutput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateMovie: AggregateMovie;
  AggregateMovieLikedByUser: AggregateMovieLikedByUser;
  AggregateMovieRating: AggregateMovieRating;
  AggregateMovieReview: AggregateMovieReview;
  AggregateMovieReviewLikedByUser: AggregateMovieReviewLikedByUser;
  AggregateMovieWatchedByUser: AggregateMovieWatchedByUser;
  AggregateUserMovieWatchlist: AggregateUserMovieWatchlist;
  Boolean: Scalars['Boolean']['output'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: Scalars['DateTimeISO']['output'];
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  EnumMoviefireAppUserRoleFieldUpdateOperationsInput: EnumMoviefireAppUserRoleFieldUpdateOperationsInput;
  EnumMoviefireAppUserRoleFilter: EnumMoviefireAppUserRoleFilter;
  Float: Scalars['Float']['output'];
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  FloatFilter: FloatFilter;
  Genre: Genre;
  GenreCount: GenreCount;
  GenreCreateNestedManyWithoutMoviesInput: GenreCreateNestedManyWithoutMoviesInput;
  GenreCreateOrConnectWithoutMoviesInput: GenreCreateOrConnectWithoutMoviesInput;
  GenreCreateWithoutMoviesInput: GenreCreateWithoutMoviesInput;
  GenreListRelationFilter: GenreListRelationFilter;
  GenreOrderByRelationAggregateInput: GenreOrderByRelationAggregateInput;
  GenreOrderByRelevanceInput: GenreOrderByRelevanceInput;
  GenreOrderByWithRelationAndSearchRelevanceInput: GenreOrderByWithRelationAndSearchRelevanceInput;
  GenreScalarWhereInput: GenreScalarWhereInput;
  GenreUpdateManyMutationInput: GenreUpdateManyMutationInput;
  GenreUpdateManyWithWhereWithoutMoviesInput: GenreUpdateManyWithWhereWithoutMoviesInput;
  GenreUpdateManyWithoutMoviesNestedInput: GenreUpdateManyWithoutMoviesNestedInput;
  GenreUpdateWithWhereUniqueWithoutMoviesInput: GenreUpdateWithWhereUniqueWithoutMoviesInput;
  GenreUpdateWithoutMoviesInput: GenreUpdateWithoutMoviesInput;
  GenreUpsertWithWhereUniqueWithoutMoviesInput: GenreUpsertWithWhereUniqueWithoutMoviesInput;
  GenreWhereInput: GenreWhereInput;
  GenreWhereUniqueInput: GenreWhereUniqueInput;
  Int: Scalars['Int']['output'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Movie: Movie;
  MovieCount: MovieCount;
  MovieCountAggregate: MovieCountAggregate;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedOneWithoutInWatchlistByUsersInput: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  MovieCreateNestedOneWithoutLikedByInput: MovieCreateNestedOneWithoutLikedByInput;
  MovieCreateNestedOneWithoutRatedByInput: MovieCreateNestedOneWithoutRatedByInput;
  MovieCreateNestedOneWithoutWatchedByInput: MovieCreateNestedOneWithoutWatchedByInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutLikedByInput: MovieCreateOrConnectWithoutLikedByInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatedByInput: MovieCreateOrConnectWithoutRatedByInput;
  MovieCreateOrConnectWithoutWatchedByInput: MovieCreateOrConnectWithoutWatchedByInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutLikedByInput: MovieCreateWithoutLikedByInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatedByInput: MovieCreateWithoutRatedByInput;
  MovieCreateWithoutWatchedByInput: MovieCreateWithoutWatchedByInput;
  MovieCrewMember: MovieCrewMember;
  MovieCrewMemberCount: MovieCrewMemberCount;
  MovieCrewMemberCreateNestedOneWithoutMoviesInput: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  MovieCrewMemberCreateOrConnectWithoutMoviesInput: MovieCrewMemberCreateOrConnectWithoutMoviesInput;
  MovieCrewMemberCreateWithoutMoviesInput: MovieCrewMemberCreateWithoutMoviesInput;
  MovieCrewMemberOnMovie: MovieCrewMemberOnMovie;
  MovieCrewMemberOnMovieCreateManyMovieInput: MovieCrewMemberOnMovieCreateManyMovieInput;
  MovieCrewMemberOnMovieCreateManyMovieInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput;
  MovieCrewMemberOnMovieCreateWithoutMovieInput: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  MovieCrewMemberOnMovieListRelationFilter: MovieCrewMemberOnMovieListRelationFilter;
  MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput: MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput;
  MovieCrewMemberOnMovieOrderByRelationAggregateInput: MovieCrewMemberOnMovieOrderByRelationAggregateInput;
  MovieCrewMemberOnMovieOrderByRelevanceInput: MovieCrewMemberOnMovieOrderByRelevanceInput;
  MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberOnMovieScalarWhereInput: MovieCrewMemberOnMovieScalarWhereInput;
  MovieCrewMemberOnMovieUpdateManyMutationInput: MovieCrewMemberOnMovieUpdateManyMutationInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieWhereInput: MovieCrewMemberOnMovieWhereInput;
  MovieCrewMemberOnMovieWhereUniqueInput: MovieCrewMemberOnMovieWhereUniqueInput;
  MovieCrewMemberOrderByRelevanceInput: MovieCrewMemberOrderByRelevanceInput;
  MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberRelationFilter: MovieCrewMemberRelationFilter;
  MovieCrewMemberType: MovieCrewMemberType;
  MovieCrewMemberTypeCount: MovieCrewMemberTypeCount;
  MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeOrderByRelevanceInput: MovieCrewMemberTypeOrderByRelevanceInput;
  MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberTypeRelationFilter: MovieCrewMemberTypeRelationFilter;
  MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput;
  MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeWhereInput: MovieCrewMemberTypeWhereInput;
  MovieCrewMemberTypeWhereUniqueInput: MovieCrewMemberTypeWhereUniqueInput;
  MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput;
  MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput: MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput;
  MovieCrewMemberUpdateWithoutMoviesInput: MovieCrewMemberUpdateWithoutMoviesInput;
  MovieCrewMemberUpsertWithoutMoviesInput: MovieCrewMemberUpsertWithoutMoviesInput;
  MovieCrewMemberWhereInput: MovieCrewMemberWhereInput;
  MovieCrewMemberWhereUniqueInput: MovieCrewMemberWhereUniqueInput;
  MovieGroupBy: MovieGroupBy;
  MovieInfo: MovieInfo;
  MovieInfoCreateNestedOneWithoutMovieInput: MovieInfoCreateNestedOneWithoutMovieInput;
  MovieInfoCreateOrConnectWithoutMovieInput: MovieInfoCreateOrConnectWithoutMovieInput;
  MovieInfoCreateWithoutMovieInput: MovieInfoCreateWithoutMovieInput;
  MovieInfoCreatealternativeTitlesInput: MovieInfoCreatealternativeTitlesInput;
  MovieInfoNullableRelationFilter: MovieInfoNullableRelationFilter;
  MovieInfoOrderByRelevanceInput: MovieInfoOrderByRelevanceInput;
  MovieInfoOrderByWithRelationAndSearchRelevanceInput: MovieInfoOrderByWithRelationAndSearchRelevanceInput;
  MovieInfoUpdateOneWithoutMovieNestedInput: MovieInfoUpdateOneWithoutMovieNestedInput;
  MovieInfoUpdateToOneWithWhereWithoutMovieInput: MovieInfoUpdateToOneWithWhereWithoutMovieInput;
  MovieInfoUpdateWithoutMovieInput: MovieInfoUpdateWithoutMovieInput;
  MovieInfoUpdatealternativeTitlesInput: MovieInfoUpdatealternativeTitlesInput;
  MovieInfoUpsertWithoutMovieInput: MovieInfoUpsertWithoutMovieInput;
  MovieInfoWhereInput: MovieInfoWhereInput;
  MovieInfoWhereUniqueInput: MovieInfoWhereUniqueInput;
  MovieKeywordCategory: MovieKeywordCategory;
  MovieKeywordCategoryCount: MovieKeywordCategoryCount;
  MovieKeywordCategoryCreateNestedManyWithoutMoviesInput: MovieKeywordCategoryCreateNestedManyWithoutMoviesInput;
  MovieKeywordCategoryCreateOrConnectWithoutMoviesInput: MovieKeywordCategoryCreateOrConnectWithoutMoviesInput;
  MovieKeywordCategoryCreateWithoutMoviesInput: MovieKeywordCategoryCreateWithoutMoviesInput;
  MovieKeywordCategoryListRelationFilter: MovieKeywordCategoryListRelationFilter;
  MovieKeywordCategoryOrderByRelationAggregateInput: MovieKeywordCategoryOrderByRelationAggregateInput;
  MovieKeywordCategoryOrderByRelevanceInput: MovieKeywordCategoryOrderByRelevanceInput;
  MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput: MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput;
  MovieKeywordCategoryScalarWhereInput: MovieKeywordCategoryScalarWhereInput;
  MovieKeywordCategoryUpdateManyMutationInput: MovieKeywordCategoryUpdateManyMutationInput;
  MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput: MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput;
  MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput: MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput;
  MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryUpdateWithoutMoviesInput: MovieKeywordCategoryUpdateWithoutMoviesInput;
  MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryWhereInput: MovieKeywordCategoryWhereInput;
  MovieKeywordCategoryWhereUniqueInput: MovieKeywordCategoryWhereUniqueInput;
  MovieLikedByUser: MovieLikedByUser;
  MovieLikedByUserCountAggregate: MovieLikedByUserCountAggregate;
  MovieLikedByUserCountOrderByAggregateInput: MovieLikedByUserCountOrderByAggregateInput;
  MovieLikedByUserCreateInput: MovieLikedByUserCreateInput;
  MovieLikedByUserCreateManyInput: MovieLikedByUserCreateManyInput;
  MovieLikedByUserCreateManyMovieInput: MovieLikedByUserCreateManyMovieInput;
  MovieLikedByUserCreateManyMovieInputEnvelope: MovieLikedByUserCreateManyMovieInputEnvelope;
  MovieLikedByUserCreateManyUserInput: MovieLikedByUserCreateManyUserInput;
  MovieLikedByUserCreateManyUserInputEnvelope: MovieLikedByUserCreateManyUserInputEnvelope;
  MovieLikedByUserCreateNestedManyWithoutMovieInput: MovieLikedByUserCreateNestedManyWithoutMovieInput;
  MovieLikedByUserCreateNestedManyWithoutUserInput: MovieLikedByUserCreateNestedManyWithoutUserInput;
  MovieLikedByUserCreateOrConnectWithoutMovieInput: MovieLikedByUserCreateOrConnectWithoutMovieInput;
  MovieLikedByUserCreateOrConnectWithoutUserInput: MovieLikedByUserCreateOrConnectWithoutUserInput;
  MovieLikedByUserCreateWithoutMovieInput: MovieLikedByUserCreateWithoutMovieInput;
  MovieLikedByUserCreateWithoutUserInput: MovieLikedByUserCreateWithoutUserInput;
  MovieLikedByUserGroupBy: MovieLikedByUserGroupBy;
  MovieLikedByUserListRelationFilter: MovieLikedByUserListRelationFilter;
  MovieLikedByUserMaxAggregate: MovieLikedByUserMaxAggregate;
  MovieLikedByUserMaxOrderByAggregateInput: MovieLikedByUserMaxOrderByAggregateInput;
  MovieLikedByUserMinAggregate: MovieLikedByUserMinAggregate;
  MovieLikedByUserMinOrderByAggregateInput: MovieLikedByUserMinOrderByAggregateInput;
  MovieLikedByUserOrderByRelationAggregateInput: MovieLikedByUserOrderByRelationAggregateInput;
  MovieLikedByUserOrderByRelevanceInput: MovieLikedByUserOrderByRelevanceInput;
  MovieLikedByUserOrderByWithAggregationInput: MovieLikedByUserOrderByWithAggregationInput;
  MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieLikedByUserScalarWhereInput: MovieLikedByUserScalarWhereInput;
  MovieLikedByUserScalarWhereWithAggregatesInput: MovieLikedByUserScalarWhereWithAggregatesInput;
  MovieLikedByUserUpdateInput: MovieLikedByUserUpdateInput;
  MovieLikedByUserUpdateManyMutationInput: MovieLikedByUserUpdateManyMutationInput;
  MovieLikedByUserUpdateManyWithWhereWithoutMovieInput: MovieLikedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieLikedByUserUpdateManyWithWhereWithoutUserInput: MovieLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieLikedByUserUpdateManyWithoutMovieNestedInput: MovieLikedByUserUpdateManyWithoutMovieNestedInput;
  MovieLikedByUserUpdateManyWithoutUserNestedInput: MovieLikedByUserUpdateManyWithoutUserNestedInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUpdateWithoutMovieInput: MovieLikedByUserUpdateWithoutMovieInput;
  MovieLikedByUserUpdateWithoutUserInput: MovieLikedByUserUpdateWithoutUserInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUserIdMovieIdCompoundUniqueInput: MovieLikedByUserUserIdMovieIdCompoundUniqueInput;
  MovieLikedByUserWhereInput: MovieLikedByUserWhereInput;
  MovieLikedByUserWhereUniqueInput: MovieLikedByUserWhereUniqueInput;
  MovieList: MovieList;
  MovieListCommentCreateManyMovieListInput: MovieListCommentCreateManyMovieListInput;
  MovieListCommentCreateManyMovieListInputEnvelope: MovieListCommentCreateManyMovieListInputEnvelope;
  MovieListCommentCreateManyUserInput: MovieListCommentCreateManyUserInput;
  MovieListCommentCreateManyUserInputEnvelope: MovieListCommentCreateManyUserInputEnvelope;
  MovieListCommentCreateNestedManyWithoutMovieListInput: MovieListCommentCreateNestedManyWithoutMovieListInput;
  MovieListCommentCreateNestedManyWithoutUserInput: MovieListCommentCreateNestedManyWithoutUserInput;
  MovieListCommentCreateOrConnectWithoutMovieListInput: MovieListCommentCreateOrConnectWithoutMovieListInput;
  MovieListCommentCreateOrConnectWithoutUserInput: MovieListCommentCreateOrConnectWithoutUserInput;
  MovieListCommentCreateWithoutMovieListInput: MovieListCommentCreateWithoutMovieListInput;
  MovieListCommentCreateWithoutUserInput: MovieListCommentCreateWithoutUserInput;
  MovieListCommentListRelationFilter: MovieListCommentListRelationFilter;
  MovieListCommentOrderByRelationAggregateInput: MovieListCommentOrderByRelationAggregateInput;
  MovieListCommentScalarWhereInput: MovieListCommentScalarWhereInput;
  MovieListCommentUpdateManyMutationInput: MovieListCommentUpdateManyMutationInput;
  MovieListCommentUpdateManyWithWhereWithoutMovieListInput: MovieListCommentUpdateManyWithWhereWithoutMovieListInput;
  MovieListCommentUpdateManyWithWhereWithoutUserInput: MovieListCommentUpdateManyWithWhereWithoutUserInput;
  MovieListCommentUpdateManyWithoutMovieListNestedInput: MovieListCommentUpdateManyWithoutMovieListNestedInput;
  MovieListCommentUpdateManyWithoutUserNestedInput: MovieListCommentUpdateManyWithoutUserNestedInput;
  MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput: MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpdateWithWhereUniqueWithoutUserInput: MovieListCommentUpdateWithWhereUniqueWithoutUserInput;
  MovieListCommentUpdateWithoutMovieListInput: MovieListCommentUpdateWithoutMovieListInput;
  MovieListCommentUpdateWithoutUserInput: MovieListCommentUpdateWithoutUserInput;
  MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput: MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpsertWithWhereUniqueWithoutUserInput: MovieListCommentUpsertWithWhereUniqueWithoutUserInput;
  MovieListCommentWhereInput: MovieListCommentWhereInput;
  MovieListCommentWhereUniqueInput: MovieListCommentWhereUniqueInput;
  MovieListCount: MovieListCount;
  MovieListCreateManyMovieListAuthorInput: MovieListCreateManyMovieListAuthorInput;
  MovieListCreateManyMovieListAuthorInputEnvelope: MovieListCreateManyMovieListAuthorInputEnvelope;
  MovieListCreateNestedManyWithoutMovieListAuthorInput: MovieListCreateNestedManyWithoutMovieListAuthorInput;
  MovieListCreateNestedManyWithoutMoviesInput: MovieListCreateNestedManyWithoutMoviesInput;
  MovieListCreateNestedOneWithoutCommentsInput: MovieListCreateNestedOneWithoutCommentsInput;
  MovieListCreateNestedOneWithoutLikedByInput: MovieListCreateNestedOneWithoutLikedByInput;
  MovieListCreateOrConnectWithoutCommentsInput: MovieListCreateOrConnectWithoutCommentsInput;
  MovieListCreateOrConnectWithoutLikedByInput: MovieListCreateOrConnectWithoutLikedByInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutCommentsInput: MovieListCreateWithoutCommentsInput;
  MovieListCreateWithoutLikedByInput: MovieListCreateWithoutLikedByInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
  MovieListCreatetagsInput: MovieListCreatetagsInput;
  MovieListLikedByUserCreateManyMovieListInput: MovieListLikedByUserCreateManyMovieListInput;
  MovieListLikedByUserCreateManyMovieListInputEnvelope: MovieListLikedByUserCreateManyMovieListInputEnvelope;
  MovieListLikedByUserCreateManyUserInput: MovieListLikedByUserCreateManyUserInput;
  MovieListLikedByUserCreateManyUserInputEnvelope: MovieListLikedByUserCreateManyUserInputEnvelope;
  MovieListLikedByUserCreateNestedManyWithoutMovieListInput: MovieListLikedByUserCreateNestedManyWithoutMovieListInput;
  MovieListLikedByUserCreateNestedManyWithoutUserInput: MovieListLikedByUserCreateNestedManyWithoutUserInput;
  MovieListLikedByUserCreateOrConnectWithoutMovieListInput: MovieListLikedByUserCreateOrConnectWithoutMovieListInput;
  MovieListLikedByUserCreateOrConnectWithoutUserInput: MovieListLikedByUserCreateOrConnectWithoutUserInput;
  MovieListLikedByUserCreateWithoutMovieListInput: MovieListLikedByUserCreateWithoutMovieListInput;
  MovieListLikedByUserCreateWithoutUserInput: MovieListLikedByUserCreateWithoutUserInput;
  MovieListLikedByUserListRelationFilter: MovieListLikedByUserListRelationFilter;
  MovieListLikedByUserOrderByRelationAggregateInput: MovieListLikedByUserOrderByRelationAggregateInput;
  MovieListLikedByUserScalarWhereInput: MovieListLikedByUserScalarWhereInput;
  MovieListLikedByUserUpdateManyMutationInput: MovieListLikedByUserUpdateManyMutationInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput: MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutUserInput: MovieListLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieListLikedByUserUpdateManyWithoutMovieListNestedInput: MovieListLikedByUserUpdateManyWithoutMovieListNestedInput;
  MovieListLikedByUserUpdateManyWithoutUserNestedInput: MovieListLikedByUserUpdateManyWithoutUserNestedInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUpdateWithoutMovieListInput: MovieListLikedByUserUpdateWithoutMovieListInput;
  MovieListLikedByUserUpdateWithoutUserInput: MovieListLikedByUserUpdateWithoutUserInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput: MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput;
  MovieListLikedByUserWhereInput: MovieListLikedByUserWhereInput;
  MovieListLikedByUserWhereUniqueInput: MovieListLikedByUserWhereUniqueInput;
  MovieListListRelationFilter: MovieListListRelationFilter;
  MovieListOrderByRelationAggregateInput: MovieListOrderByRelationAggregateInput;
  MovieListOrderByRelevanceInput: MovieListOrderByRelevanceInput;
  MovieListOrderByWithRelationAndSearchRelevanceInput: MovieListOrderByWithRelationAndSearchRelevanceInput;
  MovieListRelationFilter: MovieListRelationFilter;
  MovieListScalarWhereInput: MovieListScalarWhereInput;
  MovieListStatsCreateNestedOneWithoutMovieListInput: MovieListStatsCreateNestedOneWithoutMovieListInput;
  MovieListStatsCreateOrConnectWithoutMovieListInput: MovieListStatsCreateOrConnectWithoutMovieListInput;
  MovieListStatsCreateWithoutMovieListInput: MovieListStatsCreateWithoutMovieListInput;
  MovieListStatsNullableRelationFilter: MovieListStatsNullableRelationFilter;
  MovieListStatsOrderByRelevanceInput: MovieListStatsOrderByRelevanceInput;
  MovieListStatsOrderByWithRelationAndSearchRelevanceInput: MovieListStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieListStatsUpdateOneWithoutMovieListNestedInput: MovieListStatsUpdateOneWithoutMovieListNestedInput;
  MovieListStatsUpdateToOneWithWhereWithoutMovieListInput: MovieListStatsUpdateToOneWithWhereWithoutMovieListInput;
  MovieListStatsUpdateWithoutMovieListInput: MovieListStatsUpdateWithoutMovieListInput;
  MovieListStatsUpsertWithoutMovieListInput: MovieListStatsUpsertWithoutMovieListInput;
  MovieListStatsWhereInput: MovieListStatsWhereInput;
  MovieListStatsWhereUniqueInput: MovieListStatsWhereUniqueInput;
  MovieListUpdateManyMutationInput: MovieListUpdateManyMutationInput;
  MovieListUpdateManyWithWhereWithoutMovieListAuthorInput: MovieListUpdateManyWithWhereWithoutMovieListAuthorInput;
  MovieListUpdateManyWithWhereWithoutMoviesInput: MovieListUpdateManyWithWhereWithoutMoviesInput;
  MovieListUpdateManyWithoutMovieListAuthorNestedInput: MovieListUpdateManyWithoutMovieListAuthorNestedInput;
  MovieListUpdateManyWithoutMoviesNestedInput: MovieListUpdateManyWithoutMoviesNestedInput;
  MovieListUpdateOneRequiredWithoutCommentsNestedInput: MovieListUpdateOneRequiredWithoutCommentsNestedInput;
  MovieListUpdateOneRequiredWithoutLikedByNestedInput: MovieListUpdateOneRequiredWithoutLikedByNestedInput;
  MovieListUpdateToOneWithWhereWithoutCommentsInput: MovieListUpdateToOneWithWhereWithoutCommentsInput;
  MovieListUpdateToOneWithWhereWithoutLikedByInput: MovieListUpdateToOneWithWhereWithoutLikedByInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutCommentsInput: MovieListUpdateWithoutCommentsInput;
  MovieListUpdateWithoutLikedByInput: MovieListUpdateWithoutLikedByInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpdatetagsInput: MovieListUpdatetagsInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutCommentsInput: MovieListUpsertWithoutCommentsInput;
  MovieListUpsertWithoutLikedByInput: MovieListUpsertWithoutLikedByInput;
  MovieListWhereInput: MovieListWhereInput;
  MovieListWhereUniqueInput: MovieListWhereUniqueInput;
  MovieMaxAggregate: MovieMaxAggregate;
  MovieMaxOrderByAggregateInput: MovieMaxOrderByAggregateInput;
  MovieMinAggregate: MovieMinAggregate;
  MovieMinOrderByAggregateInput: MovieMinOrderByAggregateInput;
  MovieOrderByRelationAggregateInput: MovieOrderByRelationAggregateInput;
  MovieOrderByRelevanceInput: MovieOrderByRelevanceInput;
  MovieOrderByWithAggregationInput: MovieOrderByWithAggregationInput;
  MovieOrderByWithRelationAndSearchRelevanceInput: MovieOrderByWithRelationAndSearchRelevanceInput;
  MovieRating: MovieRating;
  MovieRatingAvgAggregate: MovieRatingAvgAggregate;
  MovieRatingAvgOrderByAggregateInput: MovieRatingAvgOrderByAggregateInput;
  MovieRatingCountAggregate: MovieRatingCountAggregate;
  MovieRatingCountOrderByAggregateInput: MovieRatingCountOrderByAggregateInput;
  MovieRatingCreateInput: MovieRatingCreateInput;
  MovieRatingCreateManyInput: MovieRatingCreateManyInput;
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateNestedOneWithoutReviewInput: MovieRatingCreateNestedOneWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutReviewInput: MovieRatingCreateOrConnectWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutReviewInput: MovieRatingCreateWithoutReviewInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingGroupBy: MovieRatingGroupBy;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingMaxAggregate: MovieRatingMaxAggregate;
  MovieRatingMaxOrderByAggregateInput: MovieRatingMaxOrderByAggregateInput;
  MovieRatingMinAggregate: MovieRatingMinAggregate;
  MovieRatingMinOrderByAggregateInput: MovieRatingMinOrderByAggregateInput;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithAggregationInput: MovieRatingOrderByWithAggregationInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingScalarWhereWithAggregatesInput: MovieRatingScalarWhereWithAggregatesInput;
  MovieRatingSumAggregate: MovieRatingSumAggregate;
  MovieRatingSumOrderByAggregateInput: MovieRatingSumOrderByAggregateInput;
  MovieRatingUpdateInput: MovieRatingUpdateInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateOneRequiredWithoutReviewNestedInput: MovieRatingUpdateOneRequiredWithoutReviewNestedInput;
  MovieRatingUpdateToOneWithWhereWithoutReviewInput: MovieRatingUpdateToOneWithWhereWithoutReviewInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutReviewInput: MovieRatingUpdateWithoutReviewInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingUpsertWithoutReviewInput: MovieRatingUpsertWithoutReviewInput;
  MovieRatingUserIdMovieIdCompoundUniqueInput: MovieRatingUserIdMovieIdCompoundUniqueInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReview: MovieReview;
  MovieReviewCount: MovieReviewCount;
  MovieReviewCountAggregate: MovieReviewCountAggregate;
  MovieReviewCountOrderByAggregateInput: MovieReviewCountOrderByAggregateInput;
  MovieReviewCreateInput: MovieReviewCreateInput;
  MovieReviewCreateManyInput: MovieReviewCreateManyInput;
  MovieReviewCreateNestedOneWithoutLikedByInput: MovieReviewCreateNestedOneWithoutLikedByInput;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutLikedByInput: MovieReviewCreateOrConnectWithoutLikedByInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutLikedByInput: MovieReviewCreateWithoutLikedByInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewGroupBy: MovieReviewGroupBy;
  MovieReviewLikedByUser: MovieReviewLikedByUser;
  MovieReviewLikedByUserCountAggregate: MovieReviewLikedByUserCountAggregate;
  MovieReviewLikedByUserCountOrderByAggregateInput: MovieReviewLikedByUserCountOrderByAggregateInput;
  MovieReviewLikedByUserCreateInput: MovieReviewLikedByUserCreateInput;
  MovieReviewLikedByUserCreateManyInput: MovieReviewLikedByUserCreateManyInput;
  MovieReviewLikedByUserCreateManyMovieReviewInput: MovieReviewLikedByUserCreateManyMovieReviewInput;
  MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope;
  MovieReviewLikedByUserCreateManyUserInput: MovieReviewLikedByUserCreateManyUserInput;
  MovieReviewLikedByUserCreateManyUserInputEnvelope: MovieReviewLikedByUserCreateManyUserInputEnvelope;
  MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput: MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateNestedManyWithoutUserInput: MovieReviewLikedByUserCreateNestedManyWithoutUserInput;
  MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateOrConnectWithoutUserInput: MovieReviewLikedByUserCreateOrConnectWithoutUserInput;
  MovieReviewLikedByUserCreateWithoutMovieReviewInput: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateWithoutUserInput: MovieReviewLikedByUserCreateWithoutUserInput;
  MovieReviewLikedByUserGroupBy: MovieReviewLikedByUserGroupBy;
  MovieReviewLikedByUserListRelationFilter: MovieReviewLikedByUserListRelationFilter;
  MovieReviewLikedByUserMaxAggregate: MovieReviewLikedByUserMaxAggregate;
  MovieReviewLikedByUserMaxOrderByAggregateInput: MovieReviewLikedByUserMaxOrderByAggregateInput;
  MovieReviewLikedByUserMinAggregate: MovieReviewLikedByUserMinAggregate;
  MovieReviewLikedByUserMinOrderByAggregateInput: MovieReviewLikedByUserMinOrderByAggregateInput;
  MovieReviewLikedByUserOrderByRelationAggregateInput: MovieReviewLikedByUserOrderByRelationAggregateInput;
  MovieReviewLikedByUserOrderByRelevanceInput: MovieReviewLikedByUserOrderByRelevanceInput;
  MovieReviewLikedByUserOrderByWithAggregationInput: MovieReviewLikedByUserOrderByWithAggregationInput;
  MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewLikedByUserScalarWhereInput: MovieReviewLikedByUserScalarWhereInput;
  MovieReviewLikedByUserScalarWhereWithAggregatesInput: MovieReviewLikedByUserScalarWhereWithAggregatesInput;
  MovieReviewLikedByUserUpdateInput: MovieReviewLikedByUserUpdateInput;
  MovieReviewLikedByUserUpdateManyMutationInput: MovieReviewLikedByUserUpdateManyMutationInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput: MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput;
  MovieReviewLikedByUserUpdateManyWithoutUserNestedInput: MovieReviewLikedByUserUpdateManyWithoutUserNestedInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUpdateWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithoutUserInput: MovieReviewLikedByUserUpdateWithoutUserInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput: MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput;
  MovieReviewLikedByUserWhereInput: MovieReviewLikedByUserWhereInput;
  MovieReviewLikedByUserWhereUniqueInput: MovieReviewLikedByUserWhereUniqueInput;
  MovieReviewMaxAggregate: MovieReviewMaxAggregate;
  MovieReviewMaxOrderByAggregateInput: MovieReviewMaxOrderByAggregateInput;
  MovieReviewMinAggregate: MovieReviewMinAggregate;
  MovieReviewMinOrderByAggregateInput: MovieReviewMinOrderByAggregateInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithAggregationInput: MovieReviewOrderByWithAggregationInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewRelationFilter: MovieReviewRelationFilter;
  MovieReviewScalarWhereWithAggregatesInput: MovieReviewScalarWhereWithAggregatesInput;
  MovieReviewUpdateInput: MovieReviewUpdateInput;
  MovieReviewUpdateManyMutationInput: MovieReviewUpdateManyMutationInput;
  MovieReviewUpdateOneRequiredWithoutLikedByNestedInput: MovieReviewUpdateOneRequiredWithoutLikedByNestedInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutLikedByInput: MovieReviewUpdateToOneWithWhereWithoutLikedByInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutLikedByInput: MovieReviewUpdateWithoutLikedByInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
  MovieReviewUpsertWithoutLikedByInput: MovieReviewUpsertWithoutLikedByInput;
  MovieReviewUpsertWithoutRatingInput: MovieReviewUpsertWithoutRatingInput;
  MovieReviewWhereInput: MovieReviewWhereInput;
  MovieReviewWhereUniqueInput: MovieReviewWhereUniqueInput;
  MovieScalarWhereInput: MovieScalarWhereInput;
  MovieScalarWhereWithAggregatesInput: MovieScalarWhereWithAggregatesInput;
  MovieSpokenLanguage: MovieSpokenLanguage;
  MovieSpokenLanguageCount: MovieSpokenLanguageCount;
  MovieSpokenLanguageCreateNestedManyWithoutMoviesInput: MovieSpokenLanguageCreateNestedManyWithoutMoviesInput;
  MovieSpokenLanguageCreateOrConnectWithoutMoviesInput: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput;
  MovieSpokenLanguageCreateWithoutMoviesInput: MovieSpokenLanguageCreateWithoutMoviesInput;
  MovieSpokenLanguageListRelationFilter: MovieSpokenLanguageListRelationFilter;
  MovieSpokenLanguageOrderByRelationAggregateInput: MovieSpokenLanguageOrderByRelationAggregateInput;
  MovieSpokenLanguageOrderByRelevanceInput: MovieSpokenLanguageOrderByRelevanceInput;
  MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput: MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput;
  MovieSpokenLanguageScalarWhereInput: MovieSpokenLanguageScalarWhereInput;
  MovieSpokenLanguageUpdateManyMutationInput: MovieSpokenLanguageUpdateManyMutationInput;
  MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput: MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput;
  MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput: MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput;
  MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageUpdateWithoutMoviesInput: MovieSpokenLanguageUpdateWithoutMoviesInput;
  MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageWhereInput: MovieSpokenLanguageWhereInput;
  MovieSpokenLanguageWhereUniqueInput: MovieSpokenLanguageWhereUniqueInput;
  MovieStats: MovieStats;
  MovieStatsCreateNestedOneWithoutMovieInput: MovieStatsCreateNestedOneWithoutMovieInput;
  MovieStatsCreateOrConnectWithoutMovieInput: MovieStatsCreateOrConnectWithoutMovieInput;
  MovieStatsCreateWithoutMovieInput: MovieStatsCreateWithoutMovieInput;
  MovieStatsNullableRelationFilter: MovieStatsNullableRelationFilter;
  MovieStatsOrderByRelevanceInput: MovieStatsOrderByRelevanceInput;
  MovieStatsOrderByWithRelationAndSearchRelevanceInput: MovieStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieStatsUpdateOneWithoutMovieNestedInput: MovieStatsUpdateOneWithoutMovieNestedInput;
  MovieStatsUpdateToOneWithWhereWithoutMovieInput: MovieStatsUpdateToOneWithWhereWithoutMovieInput;
  MovieStatsUpdateWithoutMovieInput: MovieStatsUpdateWithoutMovieInput;
  MovieStatsUpsertWithoutMovieInput: MovieStatsUpsertWithoutMovieInput;
  MovieStatsWhereInput: MovieStatsWhereInput;
  MovieStatsWhereUniqueInput: MovieStatsWhereUniqueInput;
  MovieStudio: MovieStudio;
  MovieStudioCount: MovieStudioCount;
  MovieStudioCreateNestedManyWithoutMoviesInput: MovieStudioCreateNestedManyWithoutMoviesInput;
  MovieStudioCreateOrConnectWithoutMoviesInput: MovieStudioCreateOrConnectWithoutMoviesInput;
  MovieStudioCreateWithoutMoviesInput: MovieStudioCreateWithoutMoviesInput;
  MovieStudioListRelationFilter: MovieStudioListRelationFilter;
  MovieStudioOrderByRelationAggregateInput: MovieStudioOrderByRelationAggregateInput;
  MovieStudioOrderByRelevanceInput: MovieStudioOrderByRelevanceInput;
  MovieStudioOrderByWithRelationAndSearchRelevanceInput: MovieStudioOrderByWithRelationAndSearchRelevanceInput;
  MovieStudioScalarWhereInput: MovieStudioScalarWhereInput;
  MovieStudioUpdateManyMutationInput: MovieStudioUpdateManyMutationInput;
  MovieStudioUpdateManyWithWhereWithoutMoviesInput: MovieStudioUpdateManyWithWhereWithoutMoviesInput;
  MovieStudioUpdateManyWithoutMoviesNestedInput: MovieStudioUpdateManyWithoutMoviesNestedInput;
  MovieStudioUpdateWithWhereUniqueWithoutMoviesInput: MovieStudioUpdateWithWhereUniqueWithoutMoviesInput;
  MovieStudioUpdateWithoutMoviesInput: MovieStudioUpdateWithoutMoviesInput;
  MovieStudioUpsertWithWhereUniqueWithoutMoviesInput: MovieStudioUpsertWithWhereUniqueWithoutMoviesInput;
  MovieStudioWhereInput: MovieStudioWhereInput;
  MovieStudioWhereUniqueInput: MovieStudioWhereUniqueInput;
  MovieUpdateInput: MovieUpdateInput;
  MovieUpdateManyMutationInput: MovieUpdateManyMutationInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput: MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput;
  MovieUpdateOneRequiredWithoutLikedByNestedInput: MovieUpdateOneRequiredWithoutLikedByNestedInput;
  MovieUpdateOneRequiredWithoutRatedByNestedInput: MovieUpdateOneRequiredWithoutRatedByNestedInput;
  MovieUpdateOneRequiredWithoutWatchedByNestedInput: MovieUpdateOneRequiredWithoutWatchedByNestedInput;
  MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput: MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateToOneWithWhereWithoutLikedByInput: MovieUpdateToOneWithWhereWithoutLikedByInput;
  MovieUpdateToOneWithWhereWithoutRatedByInput: MovieUpdateToOneWithWhereWithoutRatedByInput;
  MovieUpdateToOneWithWhereWithoutWatchedByInput: MovieUpdateToOneWithWhereWithoutWatchedByInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutLikedByInput: MovieUpdateWithoutLikedByInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatedByInput: MovieUpdateWithoutRatedByInput;
  MovieUpdateWithoutWatchedByInput: MovieUpdateWithoutWatchedByInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithoutInWatchlistByUsersInput: MovieUpsertWithoutInWatchlistByUsersInput;
  MovieUpsertWithoutLikedByInput: MovieUpsertWithoutLikedByInput;
  MovieUpsertWithoutRatedByInput: MovieUpsertWithoutRatedByInput;
  MovieUpsertWithoutWatchedByInput: MovieUpsertWithoutWatchedByInput;
  MovieWatchedByUser: MovieWatchedByUser;
  MovieWatchedByUserCountAggregate: MovieWatchedByUserCountAggregate;
  MovieWatchedByUserCountOrderByAggregateInput: MovieWatchedByUserCountOrderByAggregateInput;
  MovieWatchedByUserCreateInput: MovieWatchedByUserCreateInput;
  MovieWatchedByUserCreateManyInput: MovieWatchedByUserCreateManyInput;
  MovieWatchedByUserCreateManyMovieInput: MovieWatchedByUserCreateManyMovieInput;
  MovieWatchedByUserCreateManyMovieInputEnvelope: MovieWatchedByUserCreateManyMovieInputEnvelope;
  MovieWatchedByUserCreateManyUserInput: MovieWatchedByUserCreateManyUserInput;
  MovieWatchedByUserCreateManyUserInputEnvelope: MovieWatchedByUserCreateManyUserInputEnvelope;
  MovieWatchedByUserCreateNestedManyWithoutMovieInput: MovieWatchedByUserCreateNestedManyWithoutMovieInput;
  MovieWatchedByUserCreateNestedManyWithoutUserInput: MovieWatchedByUserCreateNestedManyWithoutUserInput;
  MovieWatchedByUserCreateOrConnectWithoutMovieInput: MovieWatchedByUserCreateOrConnectWithoutMovieInput;
  MovieWatchedByUserCreateOrConnectWithoutUserInput: MovieWatchedByUserCreateOrConnectWithoutUserInput;
  MovieWatchedByUserCreateWithoutMovieInput: MovieWatchedByUserCreateWithoutMovieInput;
  MovieWatchedByUserCreateWithoutUserInput: MovieWatchedByUserCreateWithoutUserInput;
  MovieWatchedByUserGroupBy: MovieWatchedByUserGroupBy;
  MovieWatchedByUserListRelationFilter: MovieWatchedByUserListRelationFilter;
  MovieWatchedByUserMaxAggregate: MovieWatchedByUserMaxAggregate;
  MovieWatchedByUserMaxOrderByAggregateInput: MovieWatchedByUserMaxOrderByAggregateInput;
  MovieWatchedByUserMinAggregate: MovieWatchedByUserMinAggregate;
  MovieWatchedByUserMinOrderByAggregateInput: MovieWatchedByUserMinOrderByAggregateInput;
  MovieWatchedByUserOrderByRelationAggregateInput: MovieWatchedByUserOrderByRelationAggregateInput;
  MovieWatchedByUserOrderByRelevanceInput: MovieWatchedByUserOrderByRelevanceInput;
  MovieWatchedByUserOrderByWithAggregationInput: MovieWatchedByUserOrderByWithAggregationInput;
  MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput: MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieWatchedByUserScalarWhereInput: MovieWatchedByUserScalarWhereInput;
  MovieWatchedByUserScalarWhereWithAggregatesInput: MovieWatchedByUserScalarWhereWithAggregatesInput;
  MovieWatchedByUserUpdateInput: MovieWatchedByUserUpdateInput;
  MovieWatchedByUserUpdateManyMutationInput: MovieWatchedByUserUpdateManyMutationInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput: MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutUserInput: MovieWatchedByUserUpdateManyWithWhereWithoutUserInput;
  MovieWatchedByUserUpdateManyWithoutMovieNestedInput: MovieWatchedByUserUpdateManyWithoutMovieNestedInput;
  MovieWatchedByUserUpdateManyWithoutUserNestedInput: MovieWatchedByUserUpdateManyWithoutUserNestedInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUpdateWithoutMovieInput: MovieWatchedByUserUpdateWithoutMovieInput;
  MovieWatchedByUserUpdateWithoutUserInput: MovieWatchedByUserUpdateWithoutUserInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUserIdMovieIdCompoundUniqueInput: MovieWatchedByUserUserIdMovieIdCompoundUniqueInput;
  MovieWatchedByUserWhereInput: MovieWatchedByUserWhereInput;
  MovieWatchedByUserWhereUniqueInput: MovieWatchedByUserWhereUniqueInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MoviesSearchCriteriaInput: MoviesSearchCriteriaInput;
  MovifierAppUser: MovifierAppUser;
  MovifierAppUserCount: MovifierAppUserCount;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateNestedOneWithoutLikedMoviesInput: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatedMoviesInput: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchlistInput: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
  MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateOrConnectWithoutLikedMoviesInput: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput: MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatedMoviesInput: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput: MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutLikedMovieReviewsInput: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateWithoutLikedMoviesInput: MovifierAppUserCreateWithoutLikedMoviesInput;
  MovifierAppUserCreateWithoutMovieListLikedByUserInput: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatedMoviesInput: MovifierAppUserCreateWithoutRatedMoviesInput;
  MovifierAppUserCreateWithoutWatchedMoviesInput: MovifierAppUserCreateWithoutWatchedMoviesInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutLikedMovieReviewsInput: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateWithoutLikedMoviesInput: MovifierAppUserUpdateWithoutLikedMoviesInput;
  MovifierAppUserUpdateWithoutMovieListLikedByUserInput: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatedMoviesInput: MovifierAppUserUpdateWithoutRatedMoviesInput;
  MovifierAppUserUpdateWithoutWatchedMoviesInput: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutLikedMovieReviewsInput: MovifierAppUserUpsertWithoutLikedMovieReviewsInput;
  MovifierAppUserUpsertWithoutLikedMoviesInput: MovifierAppUserUpsertWithoutLikedMoviesInput;
  MovifierAppUserUpsertWithoutMovieListLikedByUserInput: MovifierAppUserUpsertWithoutMovieListLikedByUserInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatedMoviesInput: MovifierAppUserUpsertWithoutRatedMoviesInput;
  MovifierAppUserUpsertWithoutWatchedMoviesInput: MovifierAppUserUpsertWithoutWatchedMoviesInput;
  MovifierAppUserUpsertWithoutWatchlistInput: MovifierAppUserUpsertWithoutWatchlistInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: {};
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableListFilter: StringNullableListFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  UserLoginInput: UserLoginInput;
  UserLoginOutput: UserLoginOutput;
  UserMovieWatchlist: UserMovieWatchlist;
  UserMovieWatchlistCountAggregate: UserMovieWatchlistCountAggregate;
  UserMovieWatchlistCountOrderByAggregateInput: UserMovieWatchlistCountOrderByAggregateInput;
  UserMovieWatchlistCreateInput: UserMovieWatchlistCreateInput;
  UserMovieWatchlistCreateManyInput: UserMovieWatchlistCreateManyInput;
  UserMovieWatchlistCreateManyMovieInput: UserMovieWatchlistCreateManyMovieInput;
  UserMovieWatchlistCreateManyMovieInputEnvelope: UserMovieWatchlistCreateManyMovieInputEnvelope;
  UserMovieWatchlistCreateManyUserInput: UserMovieWatchlistCreateManyUserInput;
  UserMovieWatchlistCreateManyUserInputEnvelope: UserMovieWatchlistCreateManyUserInputEnvelope;
  UserMovieWatchlistCreateNestedManyWithoutMovieInput: UserMovieWatchlistCreateNestedManyWithoutMovieInput;
  UserMovieWatchlistCreateNestedManyWithoutUserInput: UserMovieWatchlistCreateNestedManyWithoutUserInput;
  UserMovieWatchlistCreateOrConnectWithoutMovieInput: UserMovieWatchlistCreateOrConnectWithoutMovieInput;
  UserMovieWatchlistCreateOrConnectWithoutUserInput: UserMovieWatchlistCreateOrConnectWithoutUserInput;
  UserMovieWatchlistCreateWithoutMovieInput: UserMovieWatchlistCreateWithoutMovieInput;
  UserMovieWatchlistCreateWithoutUserInput: UserMovieWatchlistCreateWithoutUserInput;
  UserMovieWatchlistGroupBy: UserMovieWatchlistGroupBy;
  UserMovieWatchlistListRelationFilter: UserMovieWatchlistListRelationFilter;
  UserMovieWatchlistMaxAggregate: UserMovieWatchlistMaxAggregate;
  UserMovieWatchlistMaxOrderByAggregateInput: UserMovieWatchlistMaxOrderByAggregateInput;
  UserMovieWatchlistMinAggregate: UserMovieWatchlistMinAggregate;
  UserMovieWatchlistMinOrderByAggregateInput: UserMovieWatchlistMinOrderByAggregateInput;
  UserMovieWatchlistOrderByRelationAggregateInput: UserMovieWatchlistOrderByRelationAggregateInput;
  UserMovieWatchlistOrderByRelevanceInput: UserMovieWatchlistOrderByRelevanceInput;
  UserMovieWatchlistOrderByWithAggregationInput: UserMovieWatchlistOrderByWithAggregationInput;
  UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput: UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput;
  UserMovieWatchlistScalarWhereInput: UserMovieWatchlistScalarWhereInput;
  UserMovieWatchlistScalarWhereWithAggregatesInput: UserMovieWatchlistScalarWhereWithAggregatesInput;
  UserMovieWatchlistUpdateInput: UserMovieWatchlistUpdateInput;
  UserMovieWatchlistUpdateManyMutationInput: UserMovieWatchlistUpdateManyMutationInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput: UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutUserInput: UserMovieWatchlistUpdateManyWithWhereWithoutUserInput;
  UserMovieWatchlistUpdateManyWithoutMovieNestedInput: UserMovieWatchlistUpdateManyWithoutMovieNestedInput;
  UserMovieWatchlistUpdateManyWithoutUserNestedInput: UserMovieWatchlistUpdateManyWithoutUserNestedInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUpdateWithoutMovieInput: UserMovieWatchlistUpdateWithoutMovieInput;
  UserMovieWatchlistUpdateWithoutUserInput: UserMovieWatchlistUpdateWithoutUserInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUserIdMovieIdCompoundUniqueInput: UserMovieWatchlistUserIdMovieIdCompoundUniqueInput;
  UserMovieWatchlistWhereInput: UserMovieWatchlistWhereInput;
  UserMovieWatchlistWhereUniqueInput: UserMovieWatchlistWhereUniqueInput;
  UserRegisterOutput: UserRegisterOutput;
}>;

export type ClientDirectiveArgs = { };

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AffectedRowsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovie'] = ResolversParentTypes['AggregateMovie']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieLikedByUser'] = ResolversParentTypes['AggregateMovieLikedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieRating'] = ResolversParentTypes['AggregateMovieRating']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieRatingAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieRatingCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieRatingMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieRatingMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieRatingSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieReview'] = ResolversParentTypes['AggregateMovieReview']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieReviewLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieReviewLikedByUser'] = ResolversParentTypes['AggregateMovieReviewLikedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieWatchedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieWatchedByUser'] = ResolversParentTypes['AggregateMovieWatchedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateUserMovieWatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUserMovieWatchlist'] = ResolversParentTypes['AggregateUserMovieWatchlist']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['GenreCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreCount'] = ResolversParentTypes['GenreCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<GenreCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  crewMembers?: Resolver<Array<ResolversTypes['MovieCrewMemberOnMovie']>, ParentType, ContextType, Partial<MovieCrewMembersArgs>>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType, Partial<MovieGenresArgs>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inWatchlistByUsers?: Resolver<Array<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<MovieInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<Array<ResolversTypes['MovieKeywordCategory']>, ParentType, ContextType, Partial<MovieKeywordCategoriesArgs>>;
  likedBy?: Resolver<Array<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<MovieLikedByArgs>>;
  movieInfo?: Resolver<Maybe<ResolversTypes['MovieInfo']>, ParentType, ContextType, Partial<MovieMovieInfoArgs>>;
  movieLists?: Resolver<Array<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<MovieMovieListsArgs>>;
  movieStats?: Resolver<Maybe<ResolversTypes['MovieStats']>, ParentType, ContextType, Partial<MovieMovieStatsArgs>>;
  ratedBy?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<MovieRatedByArgs>>;
  spokenLanguages?: Resolver<Array<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<MovieSpokenLanguagesArgs>>;
  studios?: Resolver<Array<ResolversTypes['MovieStudio']>, ParentType, ContextType, Partial<MovieStudiosArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  watchedBy?: Resolver<Array<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<MovieWatchedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCount'] = ResolversParentTypes['MovieCount']> = ResolversObject<{
  crewMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountCrewMembersArgs>>;
  genres?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountGenresArgs>>;
  inWatchlistByUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountKeywordCategoriesArgs>>;
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountLikedByArgs>>;
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountMovieListsArgs>>;
  ratedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountRatedByArgs>>;
  spokenLanguages?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountSpokenLanguagesArgs>>;
  studios?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountStudiosArgs>>;
  watchedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountWatchedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCountAggregate'] = ResolversParentTypes['MovieCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMember'] = ResolversParentTypes['MovieCrewMember']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberCount'] = ResolversParentTypes['MovieCrewMemberCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCrewMemberCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberOnMovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberOnMovie'] = ResolversParentTypes['MovieCrewMemberOnMovie']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  crewMember?: Resolver<ResolversTypes['MovieCrewMember'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieCrewMemberId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieCrewMemberType?: Resolver<ResolversTypes['MovieCrewMemberType'], ParentType, ContextType>;
  movieCrewMemberTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberType'] = ResolversParentTypes['MovieCrewMemberType']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeCount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeCount'] = ResolversParentTypes['MovieCrewMemberTypeCount']> = ResolversObject<{
  movieCrewMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCrewMemberTypeCountMovieCrewMembersArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieGroupBy'] = ResolversParentTypes['MovieGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieInfo'] = ResolversParentTypes['MovieInfo']> = ResolversObject<{
  alternativeTitles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  durationInMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posterUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieKeywordCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieKeywordCategory'] = ResolversParentTypes['MovieKeywordCategory']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieKeywordCategoryCount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieKeywordCategoryCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieKeywordCategoryCount'] = ResolversParentTypes['MovieKeywordCategoryCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieKeywordCategoryCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUser'] = ResolversParentTypes['MovieLikedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserCountAggregate'] = ResolversParentTypes['MovieLikedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserGroupBy'] = ResolversParentTypes['MovieLikedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserMaxAggregate'] = ResolversParentTypes['MovieLikedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserMinAggregate'] = ResolversParentTypes['MovieLikedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieList'] = ResolversParentTypes['MovieList']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListCount'] = ResolversParentTypes['MovieListCount']> = ResolversObject<{
  comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountCommentsArgs>>;
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountLikedByArgs>>;
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieMaxAggregate'] = ResolversParentTypes['MovieMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieMinAggregate'] = ResolversParentTypes['MovieMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRating'] = ResolversParentTypes['MovieRating']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<MovieRatingReviewArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingAvgAggregate'] = ResolversParentTypes['MovieRatingAvgAggregate']> = ResolversObject<{
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingCountAggregate'] = ResolversParentTypes['MovieRatingCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingGroupBy'] = ResolversParentTypes['MovieRatingGroupBy']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieRatingAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieRatingCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieRatingMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieRatingMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieRatingSumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingMaxAggregate'] = ResolversParentTypes['MovieRatingMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingMinAggregate'] = ResolversParentTypes['MovieRatingMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingSumAggregate'] = ResolversParentTypes['MovieRatingSumAggregate']> = ResolversObject<{
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReview'] = ResolversParentTypes['MovieReview']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCount']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<MovieReviewLikedByArgs>>;
  rating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewCount'] = ResolversParentTypes['MovieReviewCount']> = ResolversObject<{
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieReviewCountLikedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewCountAggregate'] = ResolversParentTypes['MovieReviewCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewGroupBy'] = ResolversParentTypes['MovieReviewGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewMinAggregate']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUser'] = ResolversParentTypes['MovieReviewLikedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserCountAggregate'] = ResolversParentTypes['MovieReviewLikedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserGroupBy'] = ResolversParentTypes['MovieReviewLikedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserMaxAggregate'] = ResolversParentTypes['MovieReviewLikedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieReviewId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserMinAggregate'] = ResolversParentTypes['MovieReviewLikedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieReviewId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewMaxAggregate'] = ResolversParentTypes['MovieReviewMaxAggregate']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewMinAggregate'] = ResolversParentTypes['MovieReviewMinAggregate']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguage'] = ResolversParentTypes['MovieSpokenLanguage']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageCount'] = ResolversParentTypes['MovieSpokenLanguageCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieSpokenLanguageCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStats'] = ResolversParentTypes['MovieStats']> = ResolversObject<{
  avgRating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overallPlaceInTop?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timesWatchedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLikesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalRatingsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStudio'] = ResolversParentTypes['MovieStudio']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieStudioCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStudioCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStudioCount'] = ResolversParentTypes['MovieStudioCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieStudioCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUser'] = ResolversParentTypes['MovieWatchedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserCountAggregate'] = ResolversParentTypes['MovieWatchedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserGroupBy'] = ResolversParentTypes['MovieWatchedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserMaxAggregate'] = ResolversParentTypes['MovieWatchedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserMinAggregate'] = ResolversParentTypes['MovieWatchedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovifierAppUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovifierAppUser'] = ResolversParentTypes['MovifierAppUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovifierAppUserCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['MoviefireAppUserRole'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovifierAppUserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovifierAppUserCount'] = ResolversParentTypes['MovifierAppUserCount']> = ResolversObject<{
  MovieListLikedByUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListLikedByUserArgs>>;
  likedMovieReviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountLikedMovieReviewsArgs>>;
  likedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountLikedMoviesArgs>>;
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsArgs>>;
  movieListsComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsCommentsArgs>>;
  ratedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountRatedMoviesArgs>>;
  watchedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountWatchedMoviesArgs>>;
  watchlist?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountWatchlistArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieArgs, 'data'>>;
  createManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieLikedByUserArgs, 'data'>>;
  createManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieRatingArgs, 'data'>>;
  createManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieReviewArgs, 'data'>>;
  createManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieReviewLikedByUserArgs, 'data'>>;
  createManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieWatchedByUserArgs, 'data'>>;
  createManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyUserMovieWatchlistArgs, 'data'>>;
  createOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateOneMovieArgs, 'data'>>;
  createOneMovieLikedByUser?: Resolver<ResolversTypes['MovieLikedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieLikedByUserArgs, 'data'>>;
  createOneMovieRating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType, RequireFields<MutationCreateOneMovieRatingArgs, 'data'>>;
  createOneMovieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType, RequireFields<MutationCreateOneMovieReviewArgs, 'data'>>;
  createOneMovieReviewLikedByUser?: Resolver<ResolversTypes['MovieReviewLikedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieReviewLikedByUserArgs, 'data'>>;
  createOneMovieWatchedByUser?: Resolver<ResolversTypes['MovieWatchedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieWatchedByUserArgs, 'data'>>;
  createOneMovifierAppUser?: Resolver<ResolversTypes['UserRegisterOutput'], ParentType, ContextType, RequireFields<MutationCreateOneMovifierAppUserArgs, 'data'>>;
  createOneUserMovieWatchlist?: Resolver<ResolversTypes['UserMovieWatchlist'], ParentType, ContextType, RequireFields<MutationCreateOneUserMovieWatchlistArgs, 'data'>>;
  deleteManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieArgs>>;
  deleteManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieLikedByUserArgs>>;
  deleteManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieRatingArgs>>;
  deleteManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieReviewArgs>>;
  deleteManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieReviewLikedByUserArgs>>;
  deleteManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieWatchedByUserArgs>>;
  deleteManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyUserMovieWatchlistArgs>>;
  deleteOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieArgs, 'where'>>;
  deleteOneMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieLikedByUserArgs, 'where'>>;
  deleteOneMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieRatingArgs, 'where'>>;
  deleteOneMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieReviewArgs, 'where'>>;
  deleteOneMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieReviewLikedByUserArgs, 'where'>>;
  deleteOneMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieWatchedByUserArgs, 'where'>>;
  deleteOneUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserMovieWatchlistArgs, 'where'>>;
  loginUser?: Resolver<ResolversTypes['UserLoginOutput'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'data'>>;
  updateManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieArgs, 'data'>>;
  updateManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieLikedByUserArgs, 'data'>>;
  updateManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieRatingArgs, 'data'>>;
  updateManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieReviewArgs, 'data'>>;
  updateManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieReviewLikedByUserArgs, 'data'>>;
  updateManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieWatchedByUserArgs, 'data'>>;
  updateManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyUserMovieWatchlistArgs, 'data'>>;
  updateOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieArgs, 'data' | 'where'>>;
  updateOneMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieLikedByUserArgs, 'data' | 'where'>>;
  updateOneMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieRatingArgs, 'data' | 'where'>>;
  updateOneMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieReviewArgs, 'data' | 'where'>>;
  updateOneMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieReviewLikedByUserArgs, 'data' | 'where'>>;
  updateOneMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieWatchedByUserArgs, 'data' | 'where'>>;
  updateOneUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserMovieWatchlistArgs, 'data' | 'where'>>;
  upsertOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieLikedByUser?: Resolver<ResolversTypes['MovieLikedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieLikedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieRating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieRatingArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieReviewArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieReviewLikedByUser?: Resolver<ResolversTypes['MovieReviewLikedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieReviewLikedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieWatchedByUser?: Resolver<ResolversTypes['MovieWatchedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieWatchedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneUserMovieWatchlist?: Resolver<ResolversTypes['UserMovieWatchlist'], ParentType, ContextType, RequireFields<MutationUpsertOneUserMovieWatchlistArgs, 'create' | 'update' | 'where'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  aggregateMovie?: Resolver<ResolversTypes['AggregateMovie'], ParentType, ContextType, Partial<QueryAggregateMovieArgs>>;
  aggregateMovieLikedByUser?: Resolver<ResolversTypes['AggregateMovieLikedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieLikedByUserArgs>>;
  aggregateMovieRating?: Resolver<ResolversTypes['AggregateMovieRating'], ParentType, ContextType, Partial<QueryAggregateMovieRatingArgs>>;
  aggregateMovieReview?: Resolver<ResolversTypes['AggregateMovieReview'], ParentType, ContextType, Partial<QueryAggregateMovieReviewArgs>>;
  aggregateMovieReviewLikedByUser?: Resolver<ResolversTypes['AggregateMovieReviewLikedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieReviewLikedByUserArgs>>;
  aggregateMovieWatchedByUser?: Resolver<ResolversTypes['AggregateMovieWatchedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieWatchedByUserArgs>>;
  aggregateUserMovieWatchlist?: Resolver<ResolversTypes['AggregateUserMovieWatchlist'], ParentType, ContextType, Partial<QueryAggregateUserMovieWatchlistArgs>>;
  findFirstMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieArgs>>;
  findFirstMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieLikedByUserArgs>>;
  findFirstMovieLikedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieLikedByUserOrThrowArgs>>;
  findFirstMovieOrThrow?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieOrThrowArgs>>;
  findFirstMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryFindFirstMovieRatingArgs>>;
  findFirstMovieRatingOrThrow?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryFindFirstMovieRatingOrThrowArgs>>;
  findFirstMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewArgs>>;
  findFirstMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewLikedByUserArgs>>;
  findFirstMovieReviewLikedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewLikedByUserOrThrowArgs>>;
  findFirstMovieReviewOrThrow?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewOrThrowArgs>>;
  findFirstMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieWatchedByUserArgs>>;
  findFirstMovieWatchedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieWatchedByUserOrThrowArgs>>;
  findFirstUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryFindFirstUserMovieWatchlistArgs>>;
  findFirstUserMovieWatchlistOrThrow?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryFindFirstUserMovieWatchlistOrThrowArgs>>;
  getMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryGetMovieArgs, 'where'>>;
  getMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieLikedByUserArgs, 'where'>>;
  getMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<QueryGetMovieRatingArgs, 'where'>>;
  getMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<QueryGetMovieReviewArgs, 'where'>>;
  getMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieReviewLikedByUserArgs, 'where'>>;
  getMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieWatchedByUserArgs, 'where'>>;
  getUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<QueryGetUserMovieWatchlistArgs, 'where'>>;
  groupByMovie?: Resolver<Array<ResolversTypes['MovieGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieArgs, 'by'>>;
  groupByMovieLikedByUser?: Resolver<Array<ResolversTypes['MovieLikedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieLikedByUserArgs, 'by'>>;
  groupByMovieRating?: Resolver<Array<ResolversTypes['MovieRatingGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieRatingArgs, 'by'>>;
  groupByMovieReview?: Resolver<Array<ResolversTypes['MovieReviewGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieReviewArgs, 'by'>>;
  groupByMovieReviewLikedByUser?: Resolver<Array<ResolversTypes['MovieReviewLikedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieReviewLikedByUserArgs, 'by'>>;
  groupByMovieWatchedByUser?: Resolver<Array<ResolversTypes['MovieWatchedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieWatchedByUserArgs, 'by'>>;
  groupByUserMovieWatchlist?: Resolver<Array<ResolversTypes['UserMovieWatchlistGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByUserMovieWatchlistArgs, 'by'>>;
  me?: Resolver<Maybe<ResolversTypes['MovifierAppUser']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'where'>>;
  movieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<QueryMovieLikedByUserArgs, 'where'>>;
  movieLikedByUsers?: Resolver<Array<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryMovieLikedByUsersArgs>>;
  movieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<QueryMovieRatingArgs, 'where'>>;
  movieRatings?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryMovieRatingsArgs>>;
  movieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<QueryMovieReviewArgs, 'where'>>;
  movieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<QueryMovieReviewLikedByUserArgs, 'where'>>;
  movieReviewLikedByUsers?: Resolver<Array<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryMovieReviewLikedByUsersArgs>>;
  movieReviews?: Resolver<Array<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryMovieReviewsArgs>>;
  movieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<QueryMovieWatchedByUserArgs, 'where'>>;
  movieWatchedByUsers?: Resolver<Array<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryMovieWatchedByUsersArgs>>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryMoviesArgs>>;
  movifierAppUsers?: Resolver<Array<ResolversTypes['MovifierAppUser']>, ParentType, ContextType, Partial<QueryMovifierAppUsersArgs>>;
  searchMovies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QuerySearchMoviesArgs, 'searchCriteria'>>;
  userMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<QueryUserMovieWatchlistArgs, 'where'>>;
  userMovieWatchlists?: Resolver<Array<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryUserMovieWatchlistsArgs>>;
}>;

export type UserLoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLoginOutput'] = ResolversParentTypes['UserLoginOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlist'] = ResolversParentTypes['UserMovieWatchlist']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistCountAggregate'] = ResolversParentTypes['UserMovieWatchlistCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistGroupBy'] = ResolversParentTypes['UserMovieWatchlistGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistMaxAggregate'] = ResolversParentTypes['UserMovieWatchlistMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistMinAggregate'] = ResolversParentTypes['UserMovieWatchlistMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserRegisterOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRegisterOutput'] = ResolversParentTypes['UserRegisterOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
  AggregateMovie?: AggregateMovieResolvers<ContextType>;
  AggregateMovieLikedByUser?: AggregateMovieLikedByUserResolvers<ContextType>;
  AggregateMovieRating?: AggregateMovieRatingResolvers<ContextType>;
  AggregateMovieReview?: AggregateMovieReviewResolvers<ContextType>;
  AggregateMovieReviewLikedByUser?: AggregateMovieReviewLikedByUserResolvers<ContextType>;
  AggregateMovieWatchedByUser?: AggregateMovieWatchedByUserResolvers<ContextType>;
  AggregateUserMovieWatchlist?: AggregateUserMovieWatchlistResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  Genre?: GenreResolvers<ContextType>;
  GenreCount?: GenreCountResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MovieCount?: MovieCountResolvers<ContextType>;
  MovieCountAggregate?: MovieCountAggregateResolvers<ContextType>;
  MovieCrewMember?: MovieCrewMemberResolvers<ContextType>;
  MovieCrewMemberCount?: MovieCrewMemberCountResolvers<ContextType>;
  MovieCrewMemberOnMovie?: MovieCrewMemberOnMovieResolvers<ContextType>;
  MovieCrewMemberType?: MovieCrewMemberTypeResolvers<ContextType>;
  MovieCrewMemberTypeCount?: MovieCrewMemberTypeCountResolvers<ContextType>;
  MovieGroupBy?: MovieGroupByResolvers<ContextType>;
  MovieInfo?: MovieInfoResolvers<ContextType>;
  MovieKeywordCategory?: MovieKeywordCategoryResolvers<ContextType>;
  MovieKeywordCategoryCount?: MovieKeywordCategoryCountResolvers<ContextType>;
  MovieLikedByUser?: MovieLikedByUserResolvers<ContextType>;
  MovieLikedByUserCountAggregate?: MovieLikedByUserCountAggregateResolvers<ContextType>;
  MovieLikedByUserGroupBy?: MovieLikedByUserGroupByResolvers<ContextType>;
  MovieLikedByUserMaxAggregate?: MovieLikedByUserMaxAggregateResolvers<ContextType>;
  MovieLikedByUserMinAggregate?: MovieLikedByUserMinAggregateResolvers<ContextType>;
  MovieList?: MovieListResolvers<ContextType>;
  MovieListCount?: MovieListCountResolvers<ContextType>;
  MovieMaxAggregate?: MovieMaxAggregateResolvers<ContextType>;
  MovieMinAggregate?: MovieMinAggregateResolvers<ContextType>;
  MovieRating?: MovieRatingResolvers<ContextType>;
  MovieRatingAvgAggregate?: MovieRatingAvgAggregateResolvers<ContextType>;
  MovieRatingCountAggregate?: MovieRatingCountAggregateResolvers<ContextType>;
  MovieRatingGroupBy?: MovieRatingGroupByResolvers<ContextType>;
  MovieRatingMaxAggregate?: MovieRatingMaxAggregateResolvers<ContextType>;
  MovieRatingMinAggregate?: MovieRatingMinAggregateResolvers<ContextType>;
  MovieRatingSumAggregate?: MovieRatingSumAggregateResolvers<ContextType>;
  MovieReview?: MovieReviewResolvers<ContextType>;
  MovieReviewCount?: MovieReviewCountResolvers<ContextType>;
  MovieReviewCountAggregate?: MovieReviewCountAggregateResolvers<ContextType>;
  MovieReviewGroupBy?: MovieReviewGroupByResolvers<ContextType>;
  MovieReviewLikedByUser?: MovieReviewLikedByUserResolvers<ContextType>;
  MovieReviewLikedByUserCountAggregate?: MovieReviewLikedByUserCountAggregateResolvers<ContextType>;
  MovieReviewLikedByUserGroupBy?: MovieReviewLikedByUserGroupByResolvers<ContextType>;
  MovieReviewLikedByUserMaxAggregate?: MovieReviewLikedByUserMaxAggregateResolvers<ContextType>;
  MovieReviewLikedByUserMinAggregate?: MovieReviewLikedByUserMinAggregateResolvers<ContextType>;
  MovieReviewMaxAggregate?: MovieReviewMaxAggregateResolvers<ContextType>;
  MovieReviewMinAggregate?: MovieReviewMinAggregateResolvers<ContextType>;
  MovieSpokenLanguage?: MovieSpokenLanguageResolvers<ContextType>;
  MovieSpokenLanguageCount?: MovieSpokenLanguageCountResolvers<ContextType>;
  MovieStats?: MovieStatsResolvers<ContextType>;
  MovieStudio?: MovieStudioResolvers<ContextType>;
  MovieStudioCount?: MovieStudioCountResolvers<ContextType>;
  MovieWatchedByUser?: MovieWatchedByUserResolvers<ContextType>;
  MovieWatchedByUserCountAggregate?: MovieWatchedByUserCountAggregateResolvers<ContextType>;
  MovieWatchedByUserGroupBy?: MovieWatchedByUserGroupByResolvers<ContextType>;
  MovieWatchedByUserMaxAggregate?: MovieWatchedByUserMaxAggregateResolvers<ContextType>;
  MovieWatchedByUserMinAggregate?: MovieWatchedByUserMinAggregateResolvers<ContextType>;
  MovifierAppUser?: MovifierAppUserResolvers<ContextType>;
  MovifierAppUserCount?: MovifierAppUserCountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserLoginOutput?: UserLoginOutputResolvers<ContextType>;
  UserMovieWatchlist?: UserMovieWatchlistResolvers<ContextType>;
  UserMovieWatchlistCountAggregate?: UserMovieWatchlistCountAggregateResolvers<ContextType>;
  UserMovieWatchlistGroupBy?: UserMovieWatchlistGroupByResolvers<ContextType>;
  UserMovieWatchlistMaxAggregate?: UserMovieWatchlistMaxAggregateResolvers<ContextType>;
  UserMovieWatchlistMinAggregate?: UserMovieWatchlistMinAggregateResolvers<ContextType>;
  UserRegisterOutput?: UserRegisterOutputResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  client?: ClientDirectiveResolver<any, any, ContextType>;
}>;

export const MovieReviewCardItemFragmentDoc = gql`
    fragment MovieReviewCardItem on MovieReview {
  id
  content
  rating {
    id
    rating
    user {
      id
      username
    }
  }
  _count {
    likedBy
  }
}
    `;
export const MovieCardItemFragmentDoc = gql`
    fragment MovieCardItem on Movie {
  id
  movieInfo {
    title
    posterUrl
  }
}
    `;
export const DirectorNamesTitleItemFragmentDoc = gql`
    fragment DirectorNamesTitleItem on Movie {
  crewMembers {
    movieCrewMemberType {
      id
      name
    }
    crewMember {
      name
      id
    }
  }
}
    `;
export const MoviePagePosterItemFragmentDoc = gql`
    fragment MoviePagePosterItem on Movie {
  movieInfo {
    posterUrl
    title
  }
}
    `;
export const MoviePageDetailsTabsItemFragmentDoc = gql`
    fragment MoviePageDetailsTabsItem on Movie {
  movieInfo {
    alternativeTitles
  }
  crewMembers {
    movieCrewMemberType {
      id
      name
    }
    crewMember {
      name
      id
    }
  }
  studios {
    name
  }
  genres {
    name
  }
  keywordCategories {
    id
    name
  }
  spokenLanguages {
    language
  }
}
    `;
export const MoviePageItemFragmentDoc = gql`
    fragment MoviePageItem on Movie {
  id
  movieInfo {
    id
    title
    description
    releaseDate
    durationInMinutes
  }
  ...DirectorNamesTitleItem
  ...MoviePagePosterItem
  ...MoviePageDetailsTabsItem
}
    ${DirectorNamesTitleItemFragmentDoc}
${MoviePagePosterItemFragmentDoc}
${MoviePageDetailsTabsItemFragmentDoc}`;
export const CurrentUserFragmentDoc = gql`
    fragment CurrentUser on MovifierAppUser {
  id
  role
  name
}
    `;
export const GetMovieForPageDocument = gql`
    query GetMovieForPage($id: String!) {
  movie(where: {id: $id}) {
    ...MoviePageItem
  }
}
    ${MoviePageItemFragmentDoc}`;

/**
 * __useGetMovieForPageQuery__
 *
 * To run a query within a React component, call `useGetMovieForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieForPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieForPageQuery(baseOptions: Apollo.QueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables> & ({ variables: GetMovieForPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
      }
export function useGetMovieForPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
        }
export function useGetMovieForPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
        }
export type GetMovieForPageQueryHookResult = ReturnType<typeof useGetMovieForPageQuery>;
export type GetMovieForPageLazyQueryHookResult = ReturnType<typeof useGetMovieForPageLazyQuery>;
export type GetMovieForPageSuspenseQueryHookResult = ReturnType<typeof useGetMovieForPageSuspenseQuery>;
export type GetMovieForPageQueryResult = Apollo.QueryResult<GetMovieForPageQuery, GetMovieForPageQueryVariables>;
export const SearchMoviesDocument = gql`
    query SearchMovies($searchCriteria: MoviesSearchCriteriaInput!) {
  searchMovies(take: 5, searchCriteria: $searchCriteria) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables> & ({ variables: SearchMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export function useSearchMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesSuspenseQueryHookResult = ReturnType<typeof useSearchMoviesSuspenseQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const GetMoviesForHomePageDocument = gql`
    query GetMoviesForHomePage {
  movies {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetMoviesForHomePageQuery__
 *
 * To run a query within a React component, call `useGetMoviesForHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesForHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesForHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesForHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
      }
export function useGetMoviesForHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
        }
export function useGetMoviesForHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
        }
export type GetMoviesForHomePageQueryHookResult = ReturnType<typeof useGetMoviesForHomePageQuery>;
export type GetMoviesForHomePageLazyQueryHookResult = ReturnType<typeof useGetMoviesForHomePageLazyQuery>;
export type GetMoviesForHomePageSuspenseQueryHookResult = ReturnType<typeof useGetMoviesForHomePageSuspenseQuery>;
export type GetMoviesForHomePageQueryResult = Apollo.QueryResult<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>;
export const GetMovieRatingReviewDocument = gql`
    query GetMovieRatingReview($ratingId: String!) {
  movieReview(where: {ratingId: $ratingId}) {
    id
    content
  }
}
    `;

/**
 * __useGetMovieRatingReviewQuery__
 *
 * To run a query within a React component, call `useGetMovieRatingReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieRatingReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieRatingReviewQuery({
 *   variables: {
 *      ratingId: // value for 'ratingId'
 *   },
 * });
 */
export function useGetMovieRatingReviewQuery(baseOptions: Apollo.QueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables> & ({ variables: GetMovieRatingReviewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
      }
export function useGetMovieRatingReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
        }
export function useGetMovieRatingReviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
        }
export type GetMovieRatingReviewQueryHookResult = ReturnType<typeof useGetMovieRatingReviewQuery>;
export type GetMovieRatingReviewLazyQueryHookResult = ReturnType<typeof useGetMovieRatingReviewLazyQuery>;
export type GetMovieRatingReviewSuspenseQueryHookResult = ReturnType<typeof useGetMovieRatingReviewSuspenseQuery>;
export type GetMovieRatingReviewQueryResult = Apollo.QueryResult<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>;
export const UpsertMovieRatingReviewDocument = gql`
    mutation UpsertMovieRatingReview($ratingId: String!, $content: String!) {
  upsertOneMovieReview(
    where: {ratingId: $ratingId}
    update: {content: {set: $content}}
    create: {rating: {connect: {id: $ratingId}}, content: $content}
  ) {
    id
    content
  }
}
    `;
export type UpsertMovieRatingReviewMutationFn = Apollo.MutationFunction<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>;

/**
 * __useUpsertMovieRatingReviewMutation__
 *
 * To run a mutation, you first call `useUpsertMovieRatingReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieRatingReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieRatingReviewMutation, { data, loading, error }] = useUpsertMovieRatingReviewMutation({
 *   variables: {
 *      ratingId: // value for 'ratingId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpsertMovieRatingReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>(UpsertMovieRatingReviewDocument, options);
      }
export type UpsertMovieRatingReviewMutationHookResult = ReturnType<typeof useUpsertMovieRatingReviewMutation>;
export type UpsertMovieRatingReviewMutationResult = Apollo.MutationResult<UpsertMovieRatingReviewMutation>;
export type UpsertMovieRatingReviewMutationOptions = Apollo.BaseMutationOptions<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>;
export const IsMovieInUserWatchlistDocument = gql`
    query IsMovieInUserWatchlist($movieId: String!, $userId: String!) {
  userMovieWatchlist(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
    userId
  }
}
    `;

/**
 * __useIsMovieInUserWatchlistQuery__
 *
 * To run a query within a React component, call `useIsMovieInUserWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieInUserWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieInUserWatchlistQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieInUserWatchlistQuery(baseOptions: Apollo.QueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables> & ({ variables: IsMovieInUserWatchlistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
      }
export function useIsMovieInUserWatchlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
        }
export function useIsMovieInUserWatchlistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
        }
export type IsMovieInUserWatchlistQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistQuery>;
export type IsMovieInUserWatchlistLazyQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistLazyQuery>;
export type IsMovieInUserWatchlistSuspenseQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistSuspenseQuery>;
export type IsMovieInUserWatchlistQueryResult = Apollo.QueryResult<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>;
export const AddMovieToUserWatchlistDocument = gql`
    mutation AddMovieToUserWatchlist($movieId: String!, $userId: String!) {
  createOneUserMovieWatchlist(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    movieId
    userId
  }
}
    `;
export type AddMovieToUserWatchlistMutationFn = Apollo.MutationFunction<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>;

/**
 * __useAddMovieToUserWatchlistMutation__
 *
 * To run a mutation, you first call `useAddMovieToUserWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieToUserWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieToUserWatchlistMutation, { data, loading, error }] = useAddMovieToUserWatchlistMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddMovieToUserWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>(AddMovieToUserWatchlistDocument, options);
      }
export type AddMovieToUserWatchlistMutationHookResult = ReturnType<typeof useAddMovieToUserWatchlistMutation>;
export type AddMovieToUserWatchlistMutationResult = Apollo.MutationResult<AddMovieToUserWatchlistMutation>;
export type AddMovieToUserWatchlistMutationOptions = Apollo.BaseMutationOptions<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>;
export const RemoveMovieFromWatchlistDocument = gql`
    mutation RemoveMovieFromWatchlist($movieId: String!, $userId: String!) {
  deleteOneUserMovieWatchlist(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
    userId
  }
}
    `;
export type RemoveMovieFromWatchlistMutationFn = Apollo.MutationFunction<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>;

/**
 * __useRemoveMovieFromWatchlistMutation__
 *
 * To run a mutation, you first call `useRemoveMovieFromWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMovieFromWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMovieFromWatchlistMutation, { data, loading, error }] = useRemoveMovieFromWatchlistMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveMovieFromWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>(RemoveMovieFromWatchlistDocument, options);
      }
export type RemoveMovieFromWatchlistMutationHookResult = ReturnType<typeof useRemoveMovieFromWatchlistMutation>;
export type RemoveMovieFromWatchlistMutationResult = Apollo.MutationResult<RemoveMovieFromWatchlistMutation>;
export type RemoveMovieFromWatchlistMutationOptions = Apollo.BaseMutationOptions<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>;
export const PopularMovieReviewsDocument = gql`
    query PopularMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
  movieReviews(
    where: {rating: {is: {movieId: {equals: $movieId}}}}
    orderBy: [{likedBy: {_count: desc}}]
    take: $take
    skip: $skip
  ) {
    ...MovieReviewCardItem
  }
}
    ${MovieReviewCardItemFragmentDoc}`;

/**
 * __usePopularMovieReviewsQuery__
 *
 * To run a query within a React component, call `usePopularMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMovieReviewsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePopularMovieReviewsQuery(baseOptions: Apollo.QueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables> & ({ variables: PopularMovieReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
      }
export function usePopularMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
        }
export function usePopularMovieReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
        }
export type PopularMovieReviewsQueryHookResult = ReturnType<typeof usePopularMovieReviewsQuery>;
export type PopularMovieReviewsLazyQueryHookResult = ReturnType<typeof usePopularMovieReviewsLazyQuery>;
export type PopularMovieReviewsSuspenseQueryHookResult = ReturnType<typeof usePopularMovieReviewsSuspenseQuery>;
export type PopularMovieReviewsQueryResult = Apollo.QueryResult<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>;
export const RecentMovieReviewsDocument = gql`
    query RecentMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
  movieReviews(
    orderBy: [{updatedAt: desc}]
    where: {rating: {is: {movieId: {equals: $movieId}}}}
    take: $take
    skip: $skip
  ) {
    ...MovieReviewCardItem
  }
}
    ${MovieReviewCardItemFragmentDoc}`;

/**
 * __useRecentMovieReviewsQuery__
 *
 * To run a query within a React component, call `useRecentMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentMovieReviewsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useRecentMovieReviewsQuery(baseOptions: Apollo.QueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables> & ({ variables: RecentMovieReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
      }
export function useRecentMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
        }
export function useRecentMovieReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
        }
export type RecentMovieReviewsQueryHookResult = ReturnType<typeof useRecentMovieReviewsQuery>;
export type RecentMovieReviewsLazyQueryHookResult = ReturnType<typeof useRecentMovieReviewsLazyQuery>;
export type RecentMovieReviewsSuspenseQueryHookResult = ReturnType<typeof useRecentMovieReviewsSuspenseQuery>;
export type RecentMovieReviewsQueryResult = Apollo.QueryResult<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>;
export const GetMovieRatingByUserDocument = gql`
    query GetMovieRatingByUser($movieId: String!, $userId: String!) {
  movieRating(where: {userId_movieId: {movieId: $movieId, userId: $userId}}) {
    id
    rating
  }
}
    `;

/**
 * __useGetMovieRatingByUserQuery__
 *
 * To run a query within a React component, call `useGetMovieRatingByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieRatingByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieRatingByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMovieRatingByUserQuery(baseOptions: Apollo.QueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables> & ({ variables: GetMovieRatingByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
      }
export function useGetMovieRatingByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
        }
export function useGetMovieRatingByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
        }
export type GetMovieRatingByUserQueryHookResult = ReturnType<typeof useGetMovieRatingByUserQuery>;
export type GetMovieRatingByUserLazyQueryHookResult = ReturnType<typeof useGetMovieRatingByUserLazyQuery>;
export type GetMovieRatingByUserSuspenseQueryHookResult = ReturnType<typeof useGetMovieRatingByUserSuspenseQuery>;
export type GetMovieRatingByUserQueryResult = Apollo.QueryResult<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>;
export const UpsertMovieRatingForUserDocument = gql`
    mutation UpsertMovieRatingForUser($movieId: String!, $userId: String!, $rating: Int!) {
  upsertOneMovieRating(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
    update: {rating: {set: $rating}}
    create: {rating: $rating, user: {connect: {id: $userId}}, movie: {connect: {id: $movieId}}}
  ) {
    id
    rating
  }
}
    `;
export type UpsertMovieRatingForUserMutationFn = Apollo.MutationFunction<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>;

/**
 * __useUpsertMovieRatingForUserMutation__
 *
 * To run a mutation, you first call `useUpsertMovieRatingForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieRatingForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieRatingForUserMutation, { data, loading, error }] = useUpsertMovieRatingForUserMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpsertMovieRatingForUserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>(UpsertMovieRatingForUserDocument, options);
      }
export type UpsertMovieRatingForUserMutationHookResult = ReturnType<typeof useUpsertMovieRatingForUserMutation>;
export type UpsertMovieRatingForUserMutationResult = Apollo.MutationResult<UpsertMovieRatingForUserMutation>;
export type UpsertMovieRatingForUserMutationOptions = Apollo.BaseMutationOptions<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>;
export const DeleteMovieRatingForUserDocument = gql`
    mutation DeleteMovieRatingForUser($movieId: String!, $userId: String!) {
  deleteOneMovieRating(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    id
  }
}
    `;
export type DeleteMovieRatingForUserMutationFn = Apollo.MutationFunction<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>;

/**
 * __useDeleteMovieRatingForUserMutation__
 *
 * To run a mutation, you first call `useDeleteMovieRatingForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieRatingForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieRatingForUserMutation, { data, loading, error }] = useDeleteMovieRatingForUserMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteMovieRatingForUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>(DeleteMovieRatingForUserDocument, options);
      }
export type DeleteMovieRatingForUserMutationHookResult = ReturnType<typeof useDeleteMovieRatingForUserMutation>;
export type DeleteMovieRatingForUserMutationResult = Apollo.MutationResult<DeleteMovieRatingForUserMutation>;
export type DeleteMovieRatingForUserMutationOptions = Apollo.BaseMutationOptions<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: UserLoginInput!) {
  loginUser(data: $data) {
    token
    user {
      ...CurrentUser
    }
  }
}
    ${CurrentUserFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($data: MovifierAppUserCreateInput!) {
  createOneMovifierAppUser(data: $data) {
    token
    user {
      ...CurrentUser
    }
  }
}
    ${CurrentUserFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const IsMovieReviewLikedByUserDocument = gql`
    query IsMovieReviewLikedByUser($movieReviewId: String!, $userId: String!) {
  movieReviewLikedByUser(
    where: {userId_movieReviewId: {movieReviewId: $movieReviewId, userId: $userId}}
  ) {
    movieReviewId
  }
}
    `;

/**
 * __useIsMovieReviewLikedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieReviewLikedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieReviewLikedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieReviewLikedByUserQuery({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieReviewLikedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables> & ({ variables: IsMovieReviewLikedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
      }
export function useIsMovieReviewLikedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
        }
export function useIsMovieReviewLikedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
        }
export type IsMovieReviewLikedByUserQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserQuery>;
export type IsMovieReviewLikedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserLazyQuery>;
export type IsMovieReviewLikedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserSuspenseQuery>;
export type IsMovieReviewLikedByUserQueryResult = Apollo.QueryResult<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>;
export const MarkMovieReviewLikedDocument = gql`
    mutation MarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
  createOneMovieReviewLikedByUser(
    data: {movieReview: {connect: {id: $movieReviewId}}, user: {connect: {id: $userId}}}
  ) {
    movieReviewId
  }
}
    `;
export type MarkMovieReviewLikedMutationFn = Apollo.MutationFunction<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>;

/**
 * __useMarkMovieReviewLikedMutation__
 *
 * To run a mutation, you first call `useMarkMovieReviewLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieReviewLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieReviewLikedMutation, { data, loading, error }] = useMarkMovieReviewLikedMutation({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieReviewLikedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>(MarkMovieReviewLikedDocument, options);
      }
export type MarkMovieReviewLikedMutationHookResult = ReturnType<typeof useMarkMovieReviewLikedMutation>;
export type MarkMovieReviewLikedMutationResult = Apollo.MutationResult<MarkMovieReviewLikedMutation>;
export type MarkMovieReviewLikedMutationOptions = Apollo.BaseMutationOptions<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>;
export const UnmarkMovieReviewLikedDocument = gql`
    mutation UnmarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
  deleteOneMovieReviewLikedByUser(
    where: {userId_movieReviewId: {movieReviewId: $movieReviewId, userId: $userId}}
  ) {
    movieReviewId
  }
}
    `;
export type UnmarkMovieReviewLikedMutationFn = Apollo.MutationFunction<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>;

/**
 * __useUnmarkMovieReviewLikedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieReviewLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieReviewLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieReviewLikedMutation, { data, loading, error }] = useUnmarkMovieReviewLikedMutation({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieReviewLikedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>(UnmarkMovieReviewLikedDocument, options);
      }
export type UnmarkMovieReviewLikedMutationHookResult = ReturnType<typeof useUnmarkMovieReviewLikedMutation>;
export type UnmarkMovieReviewLikedMutationResult = Apollo.MutationResult<UnmarkMovieReviewLikedMutation>;
export type UnmarkMovieReviewLikedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>;
export const IsMovieLikedByUserDocument = gql`
    query IsMovieLikedByUser($movieId: String!, $userId: String!) {
  movieLikedByUser(where: {userId_movieId: {movieId: $movieId, userId: $userId}}) {
    movieId
  }
}
    `;

/**
 * __useIsMovieLikedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieLikedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieLikedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieLikedByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieLikedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables> & ({ variables: IsMovieLikedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
      }
export function useIsMovieLikedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
        }
export function useIsMovieLikedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
        }
export type IsMovieLikedByUserQueryHookResult = ReturnType<typeof useIsMovieLikedByUserQuery>;
export type IsMovieLikedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieLikedByUserLazyQuery>;
export type IsMovieLikedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieLikedByUserSuspenseQuery>;
export type IsMovieLikedByUserQueryResult = Apollo.QueryResult<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>;
export const MarkMovieLikedDocument = gql`
    mutation MarkMovieLiked($movieId: String!, $userId: String!) {
  createOneMovieLikedByUser(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    createdAt
  }
}
    `;
export type MarkMovieLikedMutationFn = Apollo.MutationFunction<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>;

/**
 * __useMarkMovieLikedMutation__
 *
 * To run a mutation, you first call `useMarkMovieLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieLikedMutation, { data, loading, error }] = useMarkMovieLikedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieLikedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>(MarkMovieLikedDocument, options);
      }
export type MarkMovieLikedMutationHookResult = ReturnType<typeof useMarkMovieLikedMutation>;
export type MarkMovieLikedMutationResult = Apollo.MutationResult<MarkMovieLikedMutation>;
export type MarkMovieLikedMutationOptions = Apollo.BaseMutationOptions<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>;
export const UnmarkMovieLikedDocument = gql`
    mutation UnmarkMovieLiked($movieId: String!, $userId: String!) {
  deleteOneMovieLikedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    createdAt
  }
}
    `;
export type UnmarkMovieLikedMutationFn = Apollo.MutationFunction<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>;

/**
 * __useUnmarkMovieLikedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieLikedMutation, { data, loading, error }] = useUnmarkMovieLikedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieLikedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>(UnmarkMovieLikedDocument, options);
      }
export type UnmarkMovieLikedMutationHookResult = ReturnType<typeof useUnmarkMovieLikedMutation>;
export type UnmarkMovieLikedMutationResult = Apollo.MutationResult<UnmarkMovieLikedMutation>;
export type UnmarkMovieLikedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>;
export const IsMovieWatchedByUserDocument = gql`
    query IsMovieWatchedByUser($movieId: String!, $userId: String!) {
  movieWatchedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
  }
}
    `;

/**
 * __useIsMovieWatchedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieWatchedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieWatchedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieWatchedByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieWatchedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables> & ({ variables: IsMovieWatchedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
      }
export function useIsMovieWatchedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
        }
export function useIsMovieWatchedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
        }
export type IsMovieWatchedByUserQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserQuery>;
export type IsMovieWatchedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserLazyQuery>;
export type IsMovieWatchedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserSuspenseQuery>;
export type IsMovieWatchedByUserQueryResult = Apollo.QueryResult<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>;
export const MarkMovieWatchedDocument = gql`
    mutation MarkMovieWatched($movieId: String!, $userId: String!) {
  createOneMovieWatchedByUser(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    createdAt
  }
}
    `;
export type MarkMovieWatchedMutationFn = Apollo.MutationFunction<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>;

/**
 * __useMarkMovieWatchedMutation__
 *
 * To run a mutation, you first call `useMarkMovieWatchedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieWatchedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieWatchedMutation, { data, loading, error }] = useMarkMovieWatchedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieWatchedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>(MarkMovieWatchedDocument, options);
      }
export type MarkMovieWatchedMutationHookResult = ReturnType<typeof useMarkMovieWatchedMutation>;
export type MarkMovieWatchedMutationResult = Apollo.MutationResult<MarkMovieWatchedMutation>;
export type MarkMovieWatchedMutationOptions = Apollo.BaseMutationOptions<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>;
export const UnmarkMovieWatchedDocument = gql`
    mutation UnmarkMovieWatched($movieId: String!, $userId: String!) {
  deleteOneMovieWatchedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    createdAt
  }
}
    `;
export type UnmarkMovieWatchedMutationFn = Apollo.MutationFunction<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>;

/**
 * __useUnmarkMovieWatchedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieWatchedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieWatchedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieWatchedMutation, { data, loading, error }] = useUnmarkMovieWatchedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieWatchedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>(UnmarkMovieWatchedDocument, options);
      }
export type UnmarkMovieWatchedMutationHookResult = ReturnType<typeof useUnmarkMovieWatchedMutation>;
export type UnmarkMovieWatchedMutationResult = Apollo.MutationResult<UnmarkMovieWatchedMutation>;
export type UnmarkMovieWatchedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  me {
    ...CurrentUser
  }
}
    ${CurrentUserFragmentDoc}`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export function useGetCurrentUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserSuspenseQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export type AffectedRowsOutputKeySpecifier = ('count' | AffectedRowsOutputKeySpecifier)[];
export type AffectedRowsOutputFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieKeySpecifier)[];
export type AggregateMovieFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieLikedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieLikedByUserKeySpecifier)[];
export type AggregateMovieLikedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieRatingKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateMovieRatingKeySpecifier)[];
export type AggregateMovieRatingFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieReviewKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieReviewKeySpecifier)[];
export type AggregateMovieReviewFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieReviewLikedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieReviewLikedByUserKeySpecifier)[];
export type AggregateMovieReviewLikedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieWatchedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieWatchedByUserKeySpecifier)[];
export type AggregateMovieWatchedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserMovieWatchlistKeySpecifier = ('_count' | '_max' | '_min' | AggregateUserMovieWatchlistKeySpecifier)[];
export type AggregateUserMovieWatchlistFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreKeySpecifier = ('_count' | 'createdAt' | 'name' | 'updatedAt' | GenreKeySpecifier)[];
export type GenreFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreCountKeySpecifier = ('movies' | GenreCountKeySpecifier)[];
export type GenreCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeySpecifier = ('_count' | 'createdAt' | 'crewMembers' | 'genres' | 'id' | 'inWatchlistByUsers' | 'keywordCategories' | 'likedBy' | 'movieInfo' | 'movieLists' | 'movieStats' | 'ratedBy' | 'spokenLanguages' | 'studios' | 'updatedAt' | 'watchedBy' | MovieKeySpecifier)[];
export type MovieFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movieInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieStats?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCountKeySpecifier = ('crewMembers' | 'genres' | 'inWatchlistByUsers' | 'keywordCategories' | 'likedBy' | 'movieLists' | 'ratedBy' | 'spokenLanguages' | 'studios' | 'watchedBy' | MovieCountKeySpecifier)[];
export type MovieCountFieldPolicy = {
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'updatedAt' | MovieCountAggregateKeySpecifier)[];
export type MovieCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberKeySpecifier = ('_count' | 'createdAt' | 'description' | 'id' | 'imdbId' | 'name' | 'photoUrl' | 'updatedAt' | MovieCrewMemberKeySpecifier)[];
export type MovieCrewMemberFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberCountKeySpecifier = ('movies' | MovieCrewMemberCountKeySpecifier)[];
export type MovieCrewMemberCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberOnMovieKeySpecifier = ('createdAt' | 'crewMember' | 'movie' | 'movieCrewMemberId' | 'movieCrewMemberType' | 'movieCrewMemberTypeId' | 'movieId' | 'updatedAt' | MovieCrewMemberOnMovieKeySpecifier)[];
export type MovieCrewMemberOnMovieFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	crewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberTypeId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeKeySpecifier = ('_count' | 'id' | 'name' | MovieCrewMemberTypeKeySpecifier)[];
export type MovieCrewMemberTypeFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeCountKeySpecifier = ('movieCrewMembers' | MovieCrewMemberTypeCountKeySpecifier)[];
export type MovieCrewMemberTypeCountFieldPolicy = {
	movieCrewMembers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'updatedAt' | MovieGroupByKeySpecifier)[];
export type MovieGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieInfoKeySpecifier = ('alternativeTitles' | 'createdAt' | 'description' | 'durationInMinutes' | 'id' | 'imdbId' | 'movieId' | 'posterUrl' | 'releaseDate' | 'title' | 'updatedAt' | MovieInfoKeySpecifier)[];
export type MovieInfoFieldPolicy = {
	alternativeTitles?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	durationInMinutes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	posterUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseDate?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeywordCategoryKeySpecifier = ('_count' | 'id' | 'name' | MovieKeywordCategoryKeySpecifier)[];
export type MovieKeywordCategoryFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeywordCategoryCountKeySpecifier = ('movies' | MovieKeywordCategoryCountKeySpecifier)[];
export type MovieKeywordCategoryCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | MovieLikedByUserKeySpecifier)[];
export type MovieLikedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | MovieLikedByUserCountAggregateKeySpecifier)[];
export type MovieLikedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | MovieLikedByUserGroupByKeySpecifier)[];
export type MovieLikedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieLikedByUserMaxAggregateKeySpecifier)[];
export type MovieLikedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieLikedByUserMinAggregateKeySpecifier)[];
export type MovieLikedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListKeySpecifier = ('_count' | 'createdAt' | 'description' | 'id' | 'name' | 'tags' | 'updatedAt' | 'userId' | MovieListKeySpecifier)[];
export type MovieListFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListCountKeySpecifier = ('comments' | 'likedBy' | 'movies' | MovieListCountKeySpecifier)[];
export type MovieListCountFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | MovieMaxAggregateKeySpecifier)[];
export type MovieMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieMinAggregateKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | MovieMinAggregateKeySpecifier)[];
export type MovieMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingKeySpecifier = ('createdAt' | 'id' | 'movie' | 'movieId' | 'rating' | 'review' | 'updatedAt' | 'user' | 'userId' | MovieRatingKeySpecifier)[];
export type MovieRatingFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingAvgAggregateKeySpecifier = ('rating' | MovieRatingAvgAggregateKeySpecifier)[];
export type MovieRatingAvgAggregateFieldPolicy = {
	rating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingCountAggregateKeySpecifier)[];
export type MovieRatingCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingGroupByKeySpecifier)[];
export type MovieRatingGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingMaxAggregateKeySpecifier)[];
export type MovieRatingMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingMinAggregateKeySpecifier = ('createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingMinAggregateKeySpecifier)[];
export type MovieRatingMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingSumAggregateKeySpecifier = ('rating' | MovieRatingSumAggregateKeySpecifier)[];
export type MovieRatingSumAggregateFieldPolicy = {
	rating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewKeySpecifier = ('_count' | 'content' | 'createdAt' | 'id' | 'likedBy' | 'rating' | 'ratingId' | 'updatedAt' | MovieReviewKeySpecifier)[];
export type MovieReviewFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewCountKeySpecifier = ('likedBy' | MovieReviewCountKeySpecifier)[];
export type MovieReviewCountFieldPolicy = {
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewCountAggregateKeySpecifier = ('_all' | 'content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewCountAggregateKeySpecifier)[];
export type MovieReviewCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewGroupByKeySpecifier)[];
export type MovieReviewGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserKeySpecifier = ('createdAt' | 'movieReview' | 'movieReviewId' | 'user' | 'userId' | MovieReviewLikedByUserKeySpecifier)[];
export type MovieReviewLikedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserCountAggregateKeySpecifier)[];
export type MovieReviewLikedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserGroupByKeySpecifier)[];
export type MovieReviewLikedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserMaxAggregateKeySpecifier)[];
export type MovieReviewLikedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserMinAggregateKeySpecifier)[];
export type MovieReviewLikedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewMaxAggregateKeySpecifier = ('content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewMaxAggregateKeySpecifier)[];
export type MovieReviewMaxAggregateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewMinAggregateKeySpecifier = ('content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewMinAggregateKeySpecifier)[];
export type MovieReviewMinAggregateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageKeySpecifier = ('_count' | 'createdAt' | 'language' | 'updatedAt' | MovieSpokenLanguageKeySpecifier)[];
export type MovieSpokenLanguageFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageCountKeySpecifier = ('movies' | MovieSpokenLanguageCountKeySpecifier)[];
export type MovieSpokenLanguageCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStatsKeySpecifier = ('avgRating' | 'id' | 'movieId' | 'overallPlaceInTop' | 'timesWatchedCount' | 'totalLikesCount' | 'totalRatingsCount' | MovieStatsKeySpecifier)[];
export type MovieStatsFieldPolicy = {
	avgRating?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	overallPlaceInTop?: FieldPolicy<any> | FieldReadFunction<any>,
	timesWatchedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLikesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRatingsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStudioKeySpecifier = ('_count' | 'createdAt' | 'id' | 'name' | 'updatedAt' | MovieStudioKeySpecifier)[];
export type MovieStudioFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStudioCountKeySpecifier = ('movies' | MovieStudioCountKeySpecifier)[];
export type MovieStudioCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | MovieWatchedByUserKeySpecifier)[];
export type MovieWatchedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | MovieWatchedByUserCountAggregateKeySpecifier)[];
export type MovieWatchedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | MovieWatchedByUserGroupByKeySpecifier)[];
export type MovieWatchedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieWatchedByUserMaxAggregateKeySpecifier)[];
export type MovieWatchedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieWatchedByUserMinAggregateKeySpecifier)[];
export type MovieWatchedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovifierAppUserKeySpecifier = ('_count' | 'createdAt' | 'email' | 'id' | 'name' | 'role' | 'updatedAt' | 'username' | MovifierAppUserKeySpecifier)[];
export type MovifierAppUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovifierAppUserCountKeySpecifier = ('MovieListLikedByUser' | 'likedMovieReviews' | 'likedMovies' | 'movieLists' | 'movieListsComments' | 'ratedMovies' | 'watchedMovies' | 'watchlist' | MovifierAppUserCountKeySpecifier)[];
export type MovifierAppUserCountFieldPolicy = {
	MovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	likedMovieReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	likedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListsComments?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	watchlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createManyMovie' | 'createManyMovieLikedByUser' | 'createManyMovieRating' | 'createManyMovieReview' | 'createManyMovieReviewLikedByUser' | 'createManyMovieWatchedByUser' | 'createManyUserMovieWatchlist' | 'createOneMovie' | 'createOneMovieLikedByUser' | 'createOneMovieRating' | 'createOneMovieReview' | 'createOneMovieReviewLikedByUser' | 'createOneMovieWatchedByUser' | 'createOneMovifierAppUser' | 'createOneUserMovieWatchlist' | 'deleteManyMovie' | 'deleteManyMovieLikedByUser' | 'deleteManyMovieRating' | 'deleteManyMovieReview' | 'deleteManyMovieReviewLikedByUser' | 'deleteManyMovieWatchedByUser' | 'deleteManyUserMovieWatchlist' | 'deleteOneMovie' | 'deleteOneMovieLikedByUser' | 'deleteOneMovieRating' | 'deleteOneMovieReview' | 'deleteOneMovieReviewLikedByUser' | 'deleteOneMovieWatchedByUser' | 'deleteOneUserMovieWatchlist' | 'loginUser' | 'updateManyMovie' | 'updateManyMovieLikedByUser' | 'updateManyMovieRating' | 'updateManyMovieReview' | 'updateManyMovieReviewLikedByUser' | 'updateManyMovieWatchedByUser' | 'updateManyUserMovieWatchlist' | 'updateOneMovie' | 'updateOneMovieLikedByUser' | 'updateOneMovieRating' | 'updateOneMovieReview' | 'updateOneMovieReviewLikedByUser' | 'updateOneMovieWatchedByUser' | 'updateOneUserMovieWatchlist' | 'upsertOneMovie' | 'upsertOneMovieLikedByUser' | 'upsertOneMovieRating' | 'upsertOneMovieReview' | 'upsertOneMovieReviewLikedByUser' | 'upsertOneMovieWatchedByUser' | 'upsertOneUserMovieWatchlist' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovifierAppUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	loginUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateMovie' | 'aggregateMovieLikedByUser' | 'aggregateMovieRating' | 'aggregateMovieReview' | 'aggregateMovieReviewLikedByUser' | 'aggregateMovieWatchedByUser' | 'aggregateUserMovieWatchlist' | 'findFirstMovie' | 'findFirstMovieLikedByUser' | 'findFirstMovieLikedByUserOrThrow' | 'findFirstMovieOrThrow' | 'findFirstMovieRating' | 'findFirstMovieRatingOrThrow' | 'findFirstMovieReview' | 'findFirstMovieReviewLikedByUser' | 'findFirstMovieReviewLikedByUserOrThrow' | 'findFirstMovieReviewOrThrow' | 'findFirstMovieWatchedByUser' | 'findFirstMovieWatchedByUserOrThrow' | 'findFirstUserMovieWatchlist' | 'findFirstUserMovieWatchlistOrThrow' | 'getMovie' | 'getMovieLikedByUser' | 'getMovieRating' | 'getMovieReview' | 'getMovieReviewLikedByUser' | 'getMovieWatchedByUser' | 'getUserMovieWatchlist' | 'groupByMovie' | 'groupByMovieLikedByUser' | 'groupByMovieRating' | 'groupByMovieReview' | 'groupByMovieReviewLikedByUser' | 'groupByMovieWatchedByUser' | 'groupByUserMovieWatchlist' | 'me' | 'movie' | 'movieLikedByUser' | 'movieLikedByUsers' | 'movieRating' | 'movieRatings' | 'movieReview' | 'movieReviewLikedByUser' | 'movieReviewLikedByUsers' | 'movieReviews' | 'movieWatchedByUser' | 'movieWatchedByUsers' | 'movies' | 'movifierAppUsers' | 'searchMovies' | 'userMovieWatchlist' | 'userMovieWatchlists' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieLikedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieRatingOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewLikedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieWatchedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUserMovieWatchlistOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLikedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	movieRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewLikedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	movieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieWatchedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	movifierAppUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	searchMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	userMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	userMovieWatchlists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLoginOutputKeySpecifier = ('token' | 'user' | UserLoginOutputKeySpecifier)[];
export type UserLoginOutputFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | UserMovieWatchlistKeySpecifier)[];
export type UserMovieWatchlistFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | UserMovieWatchlistCountAggregateKeySpecifier)[];
export type UserMovieWatchlistCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | UserMovieWatchlistGroupByKeySpecifier)[];
export type UserMovieWatchlistGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | UserMovieWatchlistMaxAggregateKeySpecifier)[];
export type UserMovieWatchlistMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | UserMovieWatchlistMinAggregateKeySpecifier)[];
export type UserMovieWatchlistMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRegisterOutputKeySpecifier = ('token' | 'user' | UserRegisterOutputKeySpecifier)[];
export type UserRegisterOutputFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AffectedRowsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AffectedRowsOutputKeySpecifier | (() => undefined | AffectedRowsOutputKeySpecifier),
		fields?: AffectedRowsOutputFieldPolicy,
	},
	AggregateMovie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieKeySpecifier | (() => undefined | AggregateMovieKeySpecifier),
		fields?: AggregateMovieFieldPolicy,
	},
	AggregateMovieLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieLikedByUserKeySpecifier | (() => undefined | AggregateMovieLikedByUserKeySpecifier),
		fields?: AggregateMovieLikedByUserFieldPolicy,
	},
	AggregateMovieRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieRatingKeySpecifier | (() => undefined | AggregateMovieRatingKeySpecifier),
		fields?: AggregateMovieRatingFieldPolicy,
	},
	AggregateMovieReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieReviewKeySpecifier | (() => undefined | AggregateMovieReviewKeySpecifier),
		fields?: AggregateMovieReviewFieldPolicy,
	},
	AggregateMovieReviewLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieReviewLikedByUserKeySpecifier | (() => undefined | AggregateMovieReviewLikedByUserKeySpecifier),
		fields?: AggregateMovieReviewLikedByUserFieldPolicy,
	},
	AggregateMovieWatchedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieWatchedByUserKeySpecifier | (() => undefined | AggregateMovieWatchedByUserKeySpecifier),
		fields?: AggregateMovieWatchedByUserFieldPolicy,
	},
	AggregateUserMovieWatchlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserMovieWatchlistKeySpecifier | (() => undefined | AggregateUserMovieWatchlistKeySpecifier),
		fields?: AggregateUserMovieWatchlistFieldPolicy,
	},
	Genre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreKeySpecifier | (() => undefined | GenreKeySpecifier),
		fields?: GenreFieldPolicy,
	},
	GenreCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreCountKeySpecifier | (() => undefined | GenreCountKeySpecifier),
		fields?: GenreCountFieldPolicy,
	},
	Movie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeySpecifier | (() => undefined | MovieKeySpecifier),
		fields?: MovieFieldPolicy,
	},
	MovieCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCountKeySpecifier | (() => undefined | MovieCountKeySpecifier),
		fields?: MovieCountFieldPolicy,
	},
	MovieCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCountAggregateKeySpecifier | (() => undefined | MovieCountAggregateKeySpecifier),
		fields?: MovieCountAggregateFieldPolicy,
	},
	MovieCrewMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberKeySpecifier | (() => undefined | MovieCrewMemberKeySpecifier),
		fields?: MovieCrewMemberFieldPolicy,
	},
	MovieCrewMemberCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberCountKeySpecifier | (() => undefined | MovieCrewMemberCountKeySpecifier),
		fields?: MovieCrewMemberCountFieldPolicy,
	},
	MovieCrewMemberOnMovie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberOnMovieKeySpecifier | (() => undefined | MovieCrewMemberOnMovieKeySpecifier),
		fields?: MovieCrewMemberOnMovieFieldPolicy,
	},
	MovieCrewMemberType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeKeySpecifier | (() => undefined | MovieCrewMemberTypeKeySpecifier),
		fields?: MovieCrewMemberTypeFieldPolicy,
	},
	MovieCrewMemberTypeCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeCountKeySpecifier | (() => undefined | MovieCrewMemberTypeCountKeySpecifier),
		fields?: MovieCrewMemberTypeCountFieldPolicy,
	},
	MovieGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieGroupByKeySpecifier | (() => undefined | MovieGroupByKeySpecifier),
		fields?: MovieGroupByFieldPolicy,
	},
	MovieInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieInfoKeySpecifier | (() => undefined | MovieInfoKeySpecifier),
		fields?: MovieInfoFieldPolicy,
	},
	MovieKeywordCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeywordCategoryKeySpecifier | (() => undefined | MovieKeywordCategoryKeySpecifier),
		fields?: MovieKeywordCategoryFieldPolicy,
	},
	MovieKeywordCategoryCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeywordCategoryCountKeySpecifier | (() => undefined | MovieKeywordCategoryCountKeySpecifier),
		fields?: MovieKeywordCategoryCountFieldPolicy,
	},
	MovieLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserKeySpecifier | (() => undefined | MovieLikedByUserKeySpecifier),
		fields?: MovieLikedByUserFieldPolicy,
	},
	MovieLikedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserCountAggregateKeySpecifier | (() => undefined | MovieLikedByUserCountAggregateKeySpecifier),
		fields?: MovieLikedByUserCountAggregateFieldPolicy,
	},
	MovieLikedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserGroupByKeySpecifier | (() => undefined | MovieLikedByUserGroupByKeySpecifier),
		fields?: MovieLikedByUserGroupByFieldPolicy,
	},
	MovieLikedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserMaxAggregateKeySpecifier | (() => undefined | MovieLikedByUserMaxAggregateKeySpecifier),
		fields?: MovieLikedByUserMaxAggregateFieldPolicy,
	},
	MovieLikedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserMinAggregateKeySpecifier | (() => undefined | MovieLikedByUserMinAggregateKeySpecifier),
		fields?: MovieLikedByUserMinAggregateFieldPolicy,
	},
	MovieList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListKeySpecifier | (() => undefined | MovieListKeySpecifier),
		fields?: MovieListFieldPolicy,
	},
	MovieListCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListCountKeySpecifier | (() => undefined | MovieListCountKeySpecifier),
		fields?: MovieListCountFieldPolicy,
	},
	MovieMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieMaxAggregateKeySpecifier | (() => undefined | MovieMaxAggregateKeySpecifier),
		fields?: MovieMaxAggregateFieldPolicy,
	},
	MovieMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieMinAggregateKeySpecifier | (() => undefined | MovieMinAggregateKeySpecifier),
		fields?: MovieMinAggregateFieldPolicy,
	},
	MovieRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingKeySpecifier | (() => undefined | MovieRatingKeySpecifier),
		fields?: MovieRatingFieldPolicy,
	},
	MovieRatingAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingAvgAggregateKeySpecifier | (() => undefined | MovieRatingAvgAggregateKeySpecifier),
		fields?: MovieRatingAvgAggregateFieldPolicy,
	},
	MovieRatingCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingCountAggregateKeySpecifier | (() => undefined | MovieRatingCountAggregateKeySpecifier),
		fields?: MovieRatingCountAggregateFieldPolicy,
	},
	MovieRatingGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingGroupByKeySpecifier | (() => undefined | MovieRatingGroupByKeySpecifier),
		fields?: MovieRatingGroupByFieldPolicy,
	},
	MovieRatingMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingMaxAggregateKeySpecifier | (() => undefined | MovieRatingMaxAggregateKeySpecifier),
		fields?: MovieRatingMaxAggregateFieldPolicy,
	},
	MovieRatingMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingMinAggregateKeySpecifier | (() => undefined | MovieRatingMinAggregateKeySpecifier),
		fields?: MovieRatingMinAggregateFieldPolicy,
	},
	MovieRatingSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingSumAggregateKeySpecifier | (() => undefined | MovieRatingSumAggregateKeySpecifier),
		fields?: MovieRatingSumAggregateFieldPolicy,
	},
	MovieReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewKeySpecifier | (() => undefined | MovieReviewKeySpecifier),
		fields?: MovieReviewFieldPolicy,
	},
	MovieReviewCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewCountKeySpecifier | (() => undefined | MovieReviewCountKeySpecifier),
		fields?: MovieReviewCountFieldPolicy,
	},
	MovieReviewCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewCountAggregateKeySpecifier | (() => undefined | MovieReviewCountAggregateKeySpecifier),
		fields?: MovieReviewCountAggregateFieldPolicy,
	},
	MovieReviewGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewGroupByKeySpecifier | (() => undefined | MovieReviewGroupByKeySpecifier),
		fields?: MovieReviewGroupByFieldPolicy,
	},
	MovieReviewLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserKeySpecifier | (() => undefined | MovieReviewLikedByUserKeySpecifier),
		fields?: MovieReviewLikedByUserFieldPolicy,
	},
	MovieReviewLikedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserCountAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserCountAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserCountAggregateFieldPolicy,
	},
	MovieReviewLikedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserGroupByKeySpecifier | (() => undefined | MovieReviewLikedByUserGroupByKeySpecifier),
		fields?: MovieReviewLikedByUserGroupByFieldPolicy,
	},
	MovieReviewLikedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserMaxAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserMaxAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserMaxAggregateFieldPolicy,
	},
	MovieReviewLikedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserMinAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserMinAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserMinAggregateFieldPolicy,
	},
	MovieReviewMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewMaxAggregateKeySpecifier | (() => undefined | MovieReviewMaxAggregateKeySpecifier),
		fields?: MovieReviewMaxAggregateFieldPolicy,
	},
	MovieReviewMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewMinAggregateKeySpecifier | (() => undefined | MovieReviewMinAggregateKeySpecifier),
		fields?: MovieReviewMinAggregateFieldPolicy,
	},
	MovieSpokenLanguage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageKeySpecifier | (() => undefined | MovieSpokenLanguageKeySpecifier),
		fields?: MovieSpokenLanguageFieldPolicy,
	},
	MovieSpokenLanguageCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageCountKeySpecifier | (() => undefined | MovieSpokenLanguageCountKeySpecifier),
		fields?: MovieSpokenLanguageCountFieldPolicy,
	},
	MovieStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStatsKeySpecifier | (() => undefined | MovieStatsKeySpecifier),
		fields?: MovieStatsFieldPolicy,
	},
	MovieStudio?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStudioKeySpecifier | (() => undefined | MovieStudioKeySpecifier),
		fields?: MovieStudioFieldPolicy,
	},
	MovieStudioCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStudioCountKeySpecifier | (() => undefined | MovieStudioCountKeySpecifier),
		fields?: MovieStudioCountFieldPolicy,
	},
	MovieWatchedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserKeySpecifier | (() => undefined | MovieWatchedByUserKeySpecifier),
		fields?: MovieWatchedByUserFieldPolicy,
	},
	MovieWatchedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserCountAggregateKeySpecifier | (() => undefined | MovieWatchedByUserCountAggregateKeySpecifier),
		fields?: MovieWatchedByUserCountAggregateFieldPolicy,
	},
	MovieWatchedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserGroupByKeySpecifier | (() => undefined | MovieWatchedByUserGroupByKeySpecifier),
		fields?: MovieWatchedByUserGroupByFieldPolicy,
	},
	MovieWatchedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserMaxAggregateKeySpecifier | (() => undefined | MovieWatchedByUserMaxAggregateKeySpecifier),
		fields?: MovieWatchedByUserMaxAggregateFieldPolicy,
	},
	MovieWatchedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserMinAggregateKeySpecifier | (() => undefined | MovieWatchedByUserMinAggregateKeySpecifier),
		fields?: MovieWatchedByUserMinAggregateFieldPolicy,
	},
	MovifierAppUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovifierAppUserKeySpecifier | (() => undefined | MovifierAppUserKeySpecifier),
		fields?: MovifierAppUserFieldPolicy,
	},
	MovifierAppUserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovifierAppUserCountKeySpecifier | (() => undefined | MovifierAppUserCountKeySpecifier),
		fields?: MovifierAppUserCountFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	UserLoginOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLoginOutputKeySpecifier | (() => undefined | UserLoginOutputKeySpecifier),
		fields?: UserLoginOutputFieldPolicy,
	},
	UserMovieWatchlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistKeySpecifier | (() => undefined | UserMovieWatchlistKeySpecifier),
		fields?: UserMovieWatchlistFieldPolicy,
	},
	UserMovieWatchlistCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistCountAggregateKeySpecifier | (() => undefined | UserMovieWatchlistCountAggregateKeySpecifier),
		fields?: UserMovieWatchlistCountAggregateFieldPolicy,
	},
	UserMovieWatchlistGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistGroupByKeySpecifier | (() => undefined | UserMovieWatchlistGroupByKeySpecifier),
		fields?: UserMovieWatchlistGroupByFieldPolicy,
	},
	UserMovieWatchlistMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistMaxAggregateKeySpecifier | (() => undefined | UserMovieWatchlistMaxAggregateKeySpecifier),
		fields?: UserMovieWatchlistMaxAggregateFieldPolicy,
	},
	UserMovieWatchlistMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistMinAggregateKeySpecifier | (() => undefined | UserMovieWatchlistMinAggregateKeySpecifier),
		fields?: UserMovieWatchlistMinAggregateFieldPolicy,
	},
	UserRegisterOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRegisterOutputKeySpecifier | (() => undefined | UserRegisterOutputKeySpecifier),
		fields?: UserRegisterOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;