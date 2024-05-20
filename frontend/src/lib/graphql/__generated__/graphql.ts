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

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  crewMembers: Array<MovieCrewMemberOnMovie>;
  genres: Array<Genre>;
  id: Scalars['String']['output'];
  inWatchlistByUsers: Array<MovifierAppUser>;
  keywordCategories: Array<MovieKeywordCategory>;
  movieInfo?: Maybe<MovieInfo>;
  movieLists: Array<MovieList>;
  movieStats?: Maybe<MovieStats>;
  ratings: Array<MovieRating>;
  spokenLanguages: Array<MovieSpokenLanguage>;
  studios: Array<MovieStudio>;
  updatedAt: Scalars['DateTimeISO']['output'];
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
  cursor?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovifierAppUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};


export type MovieKeywordCategoriesArgs = {
  cursor?: InputMaybe<MovieKeywordCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieKeywordCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
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


export type MovieRatingsArgs = {
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

export type MovieCount = {
  __typename?: 'MovieCount';
  crewMembers: Scalars['Int']['output'];
  genres: Scalars['Int']['output'];
  inWatchlistByUsers: Scalars['Int']['output'];
  keywordCategories: Scalars['Int']['output'];
  movieLists: Scalars['Int']['output'];
  ratings: Scalars['Int']['output'];
  spokenLanguages: Scalars['Int']['output'];
  studios: Scalars['Int']['output'];
};


export type MovieCountCrewMembersArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};


export type MovieCountGenresArgs = {
  where?: InputMaybe<GenreWhereInput>;
};


export type MovieCountInWatchlistByUsersArgs = {
  where?: InputMaybe<MovifierAppUserWhereInput>;
};


export type MovieCountKeywordCategoriesArgs = {
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
};


export type MovieCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovieCountRatingsArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovieCountSpokenLanguagesArgs = {
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MovieCountStudiosArgs = {
  where?: InputMaybe<MovieStudioWhereInput>;
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
  inWatchlistByUsers?: InputMaybe<MovifierAppUserCreateNestedManyWithoutWatchlistInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratings?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateNestedManyWithoutInWatchlistByUsersInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutInWatchlistByUsersInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutInWatchlistByUsersInput>>;
};

export type MovieCreateNestedManyWithoutMovieListsInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutMovieListsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutMovieListsInput>>;
};

export type MovieCreateNestedOneWithoutRatingsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<MovieCreateWithoutRatingsInput>;
};

export type MovieCreateOrConnectWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutRatingsInput = {
  create: MovieCreateWithoutRatingsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutInWatchlistByUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratings?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateWithoutMovieListsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserCreateNestedManyWithoutWatchlistInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratings?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateWithoutRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserCreateNestedManyWithoutWatchlistInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
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

export type MovieList = {
  __typename?: 'MovieList';
  _count?: Maybe<MovieListCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
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
  movieList: MovieListCreateNestedOneWithoutMovieListCommentsInput;
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
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput>;
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
  movieListComments: Scalars['Int']['output'];
  movies: Scalars['Int']['output'];
};


export type MovieListCountMovieListCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovieListCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieListCreateManyMovieListAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
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

export type MovieListCreateNestedOneWithoutMovieListCommentsInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutMovieListCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutMovieListCommentsInput>;
};

export type MovieListCreateOrConnectWithoutMovieListAuthorInput = {
  create: MovieListCreateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMovieListCommentsInput = {
  create: MovieListCreateWithoutMovieListCommentsInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMoviesInput = {
  create: MovieListCreateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateWithoutMovieListAuthorInput = {
  MovieListStats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMovieListCommentsInput = {
  MovieListStats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMoviesInput = {
  MovieListStats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movieListComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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
  | 'id'
  | 'name'
  | 'userId';

export type MovieListOrderByRelevanceInput = {
  fields: Array<MovieListOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListOrderByWithRelationAndSearchRelevanceInput = {
  MovieListStats?: InputMaybe<MovieListStatsOrderByWithRelationAndSearchRelevanceInput>;
  _relevance?: InputMaybe<MovieListOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieListAuthor?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  movieListComments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListRelationFilter = {
  is?: InputMaybe<MovieListWhereInput>;
  isNot?: InputMaybe<MovieListWhereInput>;
};

export type MovieListScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | 'userId';

export type MovieListScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
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
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutMovieListCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutMovieListCommentsInput>;
  update?: InputMaybe<MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput>;
  upsert?: InputMaybe<MovieListUpsertWithoutMovieListCommentsInput>;
};

export type MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput = {
  data: MovieListUpdateWithoutMovieListCommentsInput;
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

export type MovieListUpdateWithoutMovieListAuthorInput = {
  MovieListStats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListComments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMovieListCommentsInput = {
  MovieListStats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMoviesInput = {
  MovieListStats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movieListComments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type MovieListUpsertWithoutMovieListCommentsInput = {
  create: MovieListCreateWithoutMovieListCommentsInput;
  update: MovieListUpdateWithoutMovieListCommentsInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListWhereInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  MovieListStats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movieListComments?: InputMaybe<MovieListCommentListRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  MovieListStats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movieListComments?: InputMaybe<MovieListCommentListRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
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
  inWatchlistByUsers?: InputMaybe<MovifierAppUserOrderByRelationAggregateInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryOrderByRelationAggregateInput>;
  movieInfo?: InputMaybe<MovieInfoOrderByWithRelationAndSearchRelevanceInput>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieStats?: InputMaybe<MovieStatsOrderByWithRelationAndSearchRelevanceInput>;
  ratings?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageOrderByRelationAggregateInput>;
  studios?: InputMaybe<MovieStudioOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRating = {
  __typename?: 'MovieRating';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
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

export type MovieRatingCreateOrConnectWithoutMovieInput = {
  create: MovieRatingCreateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateOrConnectWithoutUserInput = {
  create: MovieRatingCreateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateWithoutMovieInput = {
  Review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatingInput;
};

export type MovieRatingCreateWithoutUserInput = {
  Review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatingsInput;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieRatingListRelationFilter = {
  every?: InputMaybe<MovieRatingWhereInput>;
  none?: InputMaybe<MovieRatingWhereInput>;
  some?: InputMaybe<MovieRatingWhereInput>;
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

export type MovieRatingOrderByWithRelationAndSearchRelevanceInput = {
  Review?: InputMaybe<MovieReviewOrderByWithRelationAndSearchRelevanceInput>;
  _relevance?: InputMaybe<MovieRatingOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
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

export type MovieRatingUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieRatingUpdateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieRatingUpdateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithoutMovieInput = {
  Review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput>;
};

export type MovieRatingUpdateWithoutUserInput = {
  Review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatingsNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
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

export type MovieRatingWhereInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  Review?: InputMaybe<MovieReviewNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRatingWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  Review?: InputMaybe<MovieReviewNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export type MovieReviewCreateNestedOneWithoutRatingInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovieReviewCreateWithoutRatingInput>;
};

export type MovieReviewCreateOrConnectWithoutRatingInput = {
  create: MovieReviewCreateWithoutRatingInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateWithoutRatingInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type MovieReviewOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieReviewOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<MovieRatingOrderByWithRelationAndSearchRelevanceInput>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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

export type MovieReviewUpdateToOneWithWhereWithoutRatingInput = {
  data: MovieReviewUpdateWithoutRatingInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpdateWithoutRatingInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  overallPlaceINTop: Scalars['Int']['output'];
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
  overallPlaceINTop: Scalars['Int']['input'];
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
  overallPlaceINTop?: InputMaybe<SortOrder>;
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
  overallPlaceINTop?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  overallPlaceINTop?: InputMaybe<IntFilter>;
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
  overallPlaceINTop?: InputMaybe<IntFilter>;
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
  inWatchlistByUsers?: InputMaybe<MovifierAppUserUpdateManyWithoutWatchlistNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratings?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutMovieListsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutInWatchlistByUsersNestedInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutInWatchlistByUsersInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutInWatchlistByUsersInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput>>;
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

export type MovieUpdateOneRequiredWithoutRatingsNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<MovieCreateWithoutRatingsInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutRatingsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutRatingsInput>;
};

export type MovieUpdateToOneWithWhereWithoutRatingsInput = {
  data: MovieUpdateWithoutRatingsInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput = {
  data: MovieUpdateWithoutInWatchlistByUsersInput;
  where: MovieWhereUniqueInput;
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
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratings?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutMovieListsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserUpdateManyWithoutWatchlistNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratings?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserUpdateManyWithoutWatchlistNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  update: MovieUpdateWithoutInWatchlistByUsersInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  update: MovieUpdateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutRatingsInput = {
  create: MovieCreateWithoutRatingsInput;
  update: MovieUpdateWithoutRatingsInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratings?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<MovifierAppUserListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratings?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MoviefireAppUserRole =
  | 'ADMIN'
  | 'USER';

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
  movieLists: Scalars['Int']['output'];
  movieListsComments: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  watchlist: Scalars['Int']['output'];
};


export type MovifierAppUserCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovifierAppUserCountMovieListsCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovifierAppUserCountRatingArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovifierAppUserCountWatchlistArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovifierAppUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rating?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<MovieCreateNestedManyWithoutInWatchlistByUsersInput>;
};

export type MovifierAppUserCreateNestedManyWithoutWatchlistInput = {
  connect?: InputMaybe<Array<MovifierAppUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovifierAppUserCreateOrConnectWithoutWatchlistInput>>;
  create?: InputMaybe<Array<MovifierAppUserCreateWithoutWatchlistInput>>;
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

export type MovifierAppUserCreateNestedOneWithoutRatingInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatingInput>;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput = {
  create: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsInput = {
  create: MovifierAppUserCreateWithoutMovieListsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutRatingInput = {
  create: MovifierAppUserCreateWithoutRatingInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateWithoutMovieListsCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rating?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<MovieCreateNestedManyWithoutInWatchlistByUsersInput>;
};

export type MovifierAppUserCreateWithoutMovieListsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rating?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<MovieCreateNestedManyWithoutInWatchlistByUsersInput>;
};

export type MovifierAppUserCreateWithoutRatingInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<MovieCreateNestedManyWithoutInWatchlistByUsersInput>;
};

export type MovifierAppUserCreateWithoutWatchlistInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rating?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type MovifierAppUserListRelationFilter = {
  every?: InputMaybe<MovifierAppUserWhereInput>;
  none?: InputMaybe<MovifierAppUserWhereInput>;
  some?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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
  _relevance?: InputMaybe<MovifierAppUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieListsComments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rating?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<MovieOrderByRelationAggregateInput>;
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

export type MovifierAppUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovifierAppUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovifierAppUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type MovifierAppUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput = {
  data: MovifierAppUserUpdateManyMutationInput;
  where: MovifierAppUserScalarWhereInput;
};

export type MovifierAppUserUpdateManyWithoutWatchlistNestedInput = {
  connect?: InputMaybe<Array<MovifierAppUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovifierAppUserCreateOrConnectWithoutWatchlistInput>>;
  create?: InputMaybe<Array<MovifierAppUserCreateWithoutWatchlistInput>>;
  delete?: InputMaybe<Array<MovifierAppUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovifierAppUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovifierAppUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovifierAppUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput>>;
  updateMany?: InputMaybe<Array<MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput>>;
  upsert?: InputMaybe<Array<MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput>>;
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

export type MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatingInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutRatingInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutRatingInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutRatingInput = {
  data: MovifierAppUserUpdateWithoutRatingInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput = {
  data: MovifierAppUserUpdateWithoutWatchlistInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserUpdateWithoutMovieListsCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<MovieUpdateManyWithoutInWatchlistByUsersNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<MovieUpdateManyWithoutInWatchlistByUsersNestedInput>;
};

export type MovifierAppUserUpdateWithoutRatingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<MovieUpdateManyWithoutInWatchlistByUsersNestedInput>;
};

export type MovifierAppUserUpdateWithoutWatchlistInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  update: MovifierAppUserUpdateWithoutWatchlistInput;
  where: MovifierAppUserWhereUniqueInput;
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

export type MovifierAppUserUpsertWithoutRatingInput = {
  create: MovifierAppUserCreateWithoutRatingInput;
  update: MovifierAppUserUpdateWithoutRatingInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserWhereInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  rating?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  watchlist?: InputMaybe<MovieListRelationFilter>;
};

export type MovifierAppUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  rating?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
  watchlist?: InputMaybe<MovieListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyMovie: AffectedRowsOutput;
  createOneMovie: Movie;
  createOneMovifierAppUser: UserRegisterOutput;
  deleteManyMovie: AffectedRowsOutput;
  deleteOneMovie?: Maybe<Movie>;
  loginUser: UserLoginOutput;
  updateManyMovie: AffectedRowsOutput;
  updateOneMovie?: Maybe<Movie>;
  upsertOneMovie: Movie;
};


export type MutationCreateManyMovieArgs = {
  data: Array<MovieCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneMovieArgs = {
  data: MovieCreateInput;
};


export type MutationCreateOneMovifierAppUserArgs = {
  data: MovifierAppUserCreateInput;
};


export type MutationDeleteManyMovieArgs = {
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationDeleteOneMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  data: UserLoginInput;
};


export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationUpdateOneMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpsertOneMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
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
  findFirstMovie?: Maybe<Movie>;
  findFirstMovieOrThrow?: Maybe<Movie>;
  getMovie?: Maybe<Movie>;
  groupByMovie: Array<MovieGroupBy>;
  me?: Maybe<MovifierAppUser>;
  movie?: Maybe<Movie>;
  movies: Array<Movie>;
  movifierAppUsers: Array<MovifierAppUser>;
};


export type QueryAggregateMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieOrThrowArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryGetMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryGroupByMovieArgs = {
  by: Array<MovieScalarFieldEnum>;
  having?: InputMaybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryMovieArgs = {
  where: MovieWhereUniqueInput;
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

export type UserRegisterOutput = {
  __typename?: 'UserRegisterOutput';
  token: Scalars['String']['output'];
  user: MovifierAppUser;
};

export type GetMoviesForHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesForHomePageQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', title: string, releaseDate: any, posterUrl: string, durationInMinutes: number } | null }> };

export type MovieCardItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', title: string, releaseDate: any, posterUrl: string, durationInMinutes: number } | null };

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
  Movie: ResolverTypeWrapper<Movie>;
  MovieCount: ResolverTypeWrapper<MovieCount>;
  MovieCountAggregate: ResolverTypeWrapper<MovieCountAggregate>;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutInWatchlistByUsersInput: MovieCreateNestedManyWithoutInWatchlistByUsersInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedOneWithoutRatingsInput: MovieCreateNestedOneWithoutRatingsInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatingsInput: MovieCreateOrConnectWithoutRatingsInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatingsInput: MovieCreateWithoutRatingsInput;
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
  MovieListCreateNestedOneWithoutMovieListCommentsInput: MovieListCreateNestedOneWithoutMovieListCommentsInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMovieListCommentsInput: MovieListCreateOrConnectWithoutMovieListCommentsInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMovieListCommentsInput: MovieListCreateWithoutMovieListCommentsInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
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
  MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput: MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput;
  MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput: MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMovieListCommentsInput: MovieListUpdateWithoutMovieListCommentsInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutMovieListCommentsInput: MovieListUpsertWithoutMovieListCommentsInput;
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
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceFieldEnum: MovieRatingOrderByRelevanceFieldEnum;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarFieldEnum: MovieRatingScalarFieldEnum;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceFieldEnum: MovieReviewOrderByRelevanceFieldEnum;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
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
  MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput: MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithoutInWatchlistByUsersNestedInput: MovieUpdateManyWithoutInWatchlistByUsersNestedInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateOneRequiredWithoutRatingsNestedInput: MovieUpdateOneRequiredWithoutRatingsNestedInput;
  MovieUpdateToOneWithWhereWithoutRatingsInput: MovieUpdateToOneWithWhereWithoutRatingsInput;
  MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput: MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatingsInput: MovieUpdateWithoutRatingsInput;
  MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput: MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithoutRatingsInput: MovieUpsertWithoutRatingsInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MoviefireAppUserRole: MoviefireAppUserRole;
  MovifierAppUser: ResolverTypeWrapper<MovifierAppUser>;
  MovifierAppUserCount: ResolverTypeWrapper<MovifierAppUserCount>;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedManyWithoutWatchlistInput: MovifierAppUserCreateNestedManyWithoutWatchlistInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatingInput: MovifierAppUserCreateNestedOneWithoutRatingInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatingInput: MovifierAppUserCreateOrConnectWithoutRatingInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatingInput: MovifierAppUserCreateWithoutRatingInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserListRelationFilter: MovifierAppUserListRelationFilter;
  MovifierAppUserOrderByRelationAggregateInput: MovifierAppUserOrderByRelationAggregateInput;
  MovifierAppUserOrderByRelevanceFieldEnum: MovifierAppUserOrderByRelevanceFieldEnum;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserScalarFieldEnum: MovifierAppUserScalarFieldEnum;
  MovifierAppUserScalarWhereInput: MovifierAppUserScalarWhereInput;
  MovifierAppUserUpdateManyMutationInput: MovifierAppUserUpdateManyMutationInput;
  MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput: MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateManyWithoutWatchlistNestedInput: MovifierAppUserUpdateManyWithoutWatchlistNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatingInput: MovifierAppUserUpdateToOneWithWhereWithoutRatingInput;
  MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput: MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatingInput: MovifierAppUserUpdateWithoutRatingInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput: MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatingInput: MovifierAppUserUpsertWithoutRatingInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
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
  UserRegisterOutput: ResolverTypeWrapper<UserRegisterOutput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateMovie: AggregateMovie;
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
  Movie: Movie;
  MovieCount: MovieCount;
  MovieCountAggregate: MovieCountAggregate;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutInWatchlistByUsersInput: MovieCreateNestedManyWithoutInWatchlistByUsersInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedOneWithoutRatingsInput: MovieCreateNestedOneWithoutRatingsInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatingsInput: MovieCreateOrConnectWithoutRatingsInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatingsInput: MovieCreateWithoutRatingsInput;
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
  MovieListCreateNestedOneWithoutMovieListCommentsInput: MovieListCreateNestedOneWithoutMovieListCommentsInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMovieListCommentsInput: MovieListCreateOrConnectWithoutMovieListCommentsInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMovieListCommentsInput: MovieListCreateWithoutMovieListCommentsInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
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
  MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput: MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput;
  MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput: MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMovieListCommentsInput: MovieListUpdateWithoutMovieListCommentsInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutMovieListCommentsInput: MovieListUpsertWithoutMovieListCommentsInput;
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
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
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
  MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput: MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithoutInWatchlistByUsersNestedInput: MovieUpdateManyWithoutInWatchlistByUsersNestedInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateOneRequiredWithoutRatingsNestedInput: MovieUpdateOneRequiredWithoutRatingsNestedInput;
  MovieUpdateToOneWithWhereWithoutRatingsInput: MovieUpdateToOneWithWhereWithoutRatingsInput;
  MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput: MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatingsInput: MovieUpdateWithoutRatingsInput;
  MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput: MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithoutRatingsInput: MovieUpsertWithoutRatingsInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MovifierAppUser: MovifierAppUser;
  MovifierAppUserCount: MovifierAppUserCount;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedManyWithoutWatchlistInput: MovifierAppUserCreateNestedManyWithoutWatchlistInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatingInput: MovifierAppUserCreateNestedOneWithoutRatingInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatingInput: MovifierAppUserCreateOrConnectWithoutRatingInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatingInput: MovifierAppUserCreateWithoutRatingInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserListRelationFilter: MovifierAppUserListRelationFilter;
  MovifierAppUserOrderByRelationAggregateInput: MovifierAppUserOrderByRelationAggregateInput;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserScalarWhereInput: MovifierAppUserScalarWhereInput;
  MovifierAppUserUpdateManyMutationInput: MovifierAppUserUpdateManyMutationInput;
  MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput: MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateManyWithoutWatchlistNestedInput: MovifierAppUserUpdateManyWithoutWatchlistNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatingInput: MovifierAppUserUpdateToOneWithWhereWithoutRatingInput;
  MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput: MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatingInput: MovifierAppUserUpdateWithoutRatingInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput: MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatingInput: MovifierAppUserUpsertWithoutRatingInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
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
  inWatchlistByUsers?: Resolver<Array<ResolversTypes['MovifierAppUser']>, ParentType, ContextType, Partial<MovieInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<Array<ResolversTypes['MovieKeywordCategory']>, ParentType, ContextType, Partial<MovieKeywordCategoriesArgs>>;
  movieInfo?: Resolver<Maybe<ResolversTypes['MovieInfo']>, ParentType, ContextType, Partial<MovieMovieInfoArgs>>;
  movieLists?: Resolver<Array<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<MovieMovieListsArgs>>;
  movieStats?: Resolver<Maybe<ResolversTypes['MovieStats']>, ParentType, ContextType, Partial<MovieMovieStatsArgs>>;
  ratings?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<MovieRatingsArgs>>;
  spokenLanguages?: Resolver<Array<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<MovieSpokenLanguagesArgs>>;
  studios?: Resolver<Array<ResolversTypes['MovieStudio']>, ParentType, ContextType, Partial<MovieStudiosArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCount'] = ResolversParentTypes['MovieCount']> = ResolversObject<{
  crewMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountCrewMembersArgs>>;
  genres?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountGenresArgs>>;
  inWatchlistByUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountKeywordCategoriesArgs>>;
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountMovieListsArgs>>;
  ratings?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountRatingsArgs>>;
  spokenLanguages?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountSpokenLanguagesArgs>>;
  studios?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountStudiosArgs>>;
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

export type MovieListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieList'] = ResolversParentTypes['MovieList']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListCount'] = ResolversParentTypes['MovieListCount']> = ResolversObject<{
  movieListComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountMovieListCommentsArgs>>;
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
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  overallPlaceINTop?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsArgs>>;
  movieListsComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsCommentsArgs>>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountRatingArgs>>;
  watchlist?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountWatchlistArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieArgs, 'data'>>;
  createOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateOneMovieArgs, 'data'>>;
  createOneMovifierAppUser?: Resolver<ResolversTypes['UserRegisterOutput'], ParentType, ContextType, RequireFields<MutationCreateOneMovifierAppUserArgs, 'data'>>;
  deleteManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieArgs>>;
  deleteOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieArgs, 'where'>>;
  loginUser?: Resolver<ResolversTypes['UserLoginOutput'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'data'>>;
  updateManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieArgs, 'data'>>;
  updateOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieArgs, 'data' | 'where'>>;
  upsertOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieArgs, 'create' | 'update' | 'where'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  aggregateMovie?: Resolver<ResolversTypes['AggregateMovie'], ParentType, ContextType, Partial<QueryAggregateMovieArgs>>;
  findFirstMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieArgs>>;
  findFirstMovieOrThrow?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieOrThrowArgs>>;
  getMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryGetMovieArgs, 'where'>>;
  groupByMovie?: Resolver<Array<ResolversTypes['MovieGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieArgs, 'by'>>;
  me?: Resolver<Maybe<ResolversTypes['MovifierAppUser']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'where'>>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryMoviesArgs>>;
  movifierAppUsers?: Resolver<Array<ResolversTypes['MovifierAppUser']>, ParentType, ContextType, Partial<QueryMovifierAppUsersArgs>>;
}>;

export type UserLoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLoginOutput'] = ResolversParentTypes['UserLoginOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
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
  MovieList?: MovieListResolvers<ContextType>;
  MovieListCount?: MovieListCountResolvers<ContextType>;
  MovieMaxAggregate?: MovieMaxAggregateResolvers<ContextType>;
  MovieMinAggregate?: MovieMinAggregateResolvers<ContextType>;
  MovieRating?: MovieRatingResolvers<ContextType>;
  MovieSpokenLanguage?: MovieSpokenLanguageResolvers<ContextType>;
  MovieSpokenLanguageCount?: MovieSpokenLanguageCountResolvers<ContextType>;
  MovieStats?: MovieStatsResolvers<ContextType>;
  MovieStudio?: MovieStudioResolvers<ContextType>;
  MovieStudioCount?: MovieStudioCountResolvers<ContextType>;
  MovifierAppUser?: MovifierAppUserResolvers<ContextType>;
  MovifierAppUserCount?: MovifierAppUserCountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserLoginOutput?: UserLoginOutputResolvers<ContextType>;
  UserRegisterOutput?: UserRegisterOutputResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  client?: ClientDirectiveResolver<any, any, ContextType>;
}>;

export const MovieCardItemFragmentDoc = gql`
    fragment MovieCardItem on Movie {
  id
  movieInfo {
    title
    releaseDate
    posterUrl
    durationInMinutes
  }
}
    `;
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
export type MovieKeySpecifier = ('_count' | 'createdAt' | 'crewMembers' | 'genres' | 'id' | 'inWatchlistByUsers' | 'keywordCategories' | 'movieInfo' | 'movieLists' | 'movieStats' | 'ratings' | 'spokenLanguages' | 'studios' | 'updatedAt' | MovieKeySpecifier)[];
export type MovieFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	movieInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieStats?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCountKeySpecifier = ('crewMembers' | 'genres' | 'inWatchlistByUsers' | 'keywordCategories' | 'movieLists' | 'ratings' | 'spokenLanguages' | 'studios' | MovieCountKeySpecifier)[];
export type MovieCountFieldPolicy = {
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MovieListKeySpecifier = ('_count' | 'createdAt' | 'id' | 'name' | 'updatedAt' | 'userId' | MovieListKeySpecifier)[];
export type MovieListFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListCountKeySpecifier = ('movieListComments' | 'movies' | MovieListCountKeySpecifier)[];
export type MovieListCountFieldPolicy = {
	movieListComments?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MovieRatingKeySpecifier = ('createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingKeySpecifier)[];
export type MovieRatingFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MovieStatsKeySpecifier = ('avgRating' | 'id' | 'movieId' | 'overallPlaceINTop' | 'timesWatchedCount' | 'totalLikesCount' | 'totalRatingsCount' | MovieStatsKeySpecifier)[];
export type MovieStatsFieldPolicy = {
	avgRating?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	overallPlaceINTop?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MovifierAppUserCountKeySpecifier = ('movieLists' | 'movieListsComments' | 'rating' | 'watchlist' | MovifierAppUserCountKeySpecifier)[];
export type MovifierAppUserCountFieldPolicy = {
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListsComments?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	watchlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createManyMovie' | 'createOneMovie' | 'createOneMovifierAppUser' | 'deleteManyMovie' | 'deleteOneMovie' | 'loginUser' | 'updateManyMovie' | 'updateOneMovie' | 'upsertOneMovie' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovifierAppUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	loginUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovie?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateMovie' | 'findFirstMovie' | 'findFirstMovieOrThrow' | 'getMovie' | 'groupByMovie' | 'me' | 'movie' | 'movies' | 'movifierAppUsers' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	movifierAppUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLoginOutputKeySpecifier = ('token' | 'user' | UserLoginOutputKeySpecifier)[];
export type UserLoginOutputFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
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
	UserRegisterOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRegisterOutputKeySpecifier | (() => undefined | UserRegisterOutputKeySpecifier),
		fields?: UserRegisterOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;