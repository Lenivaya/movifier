import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { MovieCrewMemberOnMovieListRelationFilter } from "../inputs/MovieCrewMemberOnMovieListRelationFilter";
import { MovieInfoNullableRelationFilter } from "../inputs/MovieInfoNullableRelationFilter";
import { MovieKeywordCategoryListRelationFilter } from "../inputs/MovieKeywordCategoryListRelationFilter";
import { MovieLikedByUserListRelationFilter } from "../inputs/MovieLikedByUserListRelationFilter";
import { MovieListListRelationFilter } from "../inputs/MovieListListRelationFilter";
import { MovieRatingListRelationFilter } from "../inputs/MovieRatingListRelationFilter";
import { MovieSpokenLanguageListRelationFilter } from "../inputs/MovieSpokenLanguageListRelationFilter";
import { MovieStatsNullableRelationFilter } from "../inputs/MovieStatsNullableRelationFilter";
import { MovieStudioListRelationFilter } from "../inputs/MovieStudioListRelationFilter";
import { MovieWatchedByUserListRelationFilter } from "../inputs/MovieWatchedByUserListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserMovieWatchlistListRelationFilter } from "../inputs/UserMovieWatchlistListRelationFilter";

@TypeGraphQL.InputType("MovieWhereInput", {})
export class MovieWhereInput {
  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  NOT?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => MovieInfoNullableRelationFilter, {
    nullable: true
  })
  movieInfo?: MovieInfoNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieStatsNullableRelationFilter, {
    nullable: true
  })
  movieStats?: MovieStatsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieListRelationFilter, {
    nullable: true
  })
  crewMembers?: MovieCrewMemberOnMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieStudioListRelationFilter, {
    nullable: true
  })
  studios?: MovieStudioListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryListRelationFilter, {
    nullable: true
  })
  keywordCategories?: MovieKeywordCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRatingListRelationFilter, {
    nullable: true
  })
  ratedBy?: MovieRatingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListListRelationFilter, {
    nullable: true
  })
  movieLists?: MovieListListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageListRelationFilter, {
    nullable: true
  })
  spokenLanguages?: MovieSpokenLanguageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserListRelationFilter, {
    nullable: true
  })
  watchedBy?: MovieWatchedByUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserListRelationFilter, {
    nullable: true
  })
  likedBy?: MovieLikedByUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistListRelationFilter, {
    nullable: true
  })
  inWatchlistByUsers?: UserMovieWatchlistListRelationFilter | undefined;
}
