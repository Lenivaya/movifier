import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { MovieCrewMemberListRelationFilter } from "../inputs/MovieCrewMemberListRelationFilter";
import { MovieInfoNullableRelationFilter } from "../inputs/MovieInfoNullableRelationFilter";
import { MovieKeywordCategoryListRelationFilter } from "../inputs/MovieKeywordCategoryListRelationFilter";
import { MovieListListRelationFilter } from "../inputs/MovieListListRelationFilter";
import { MovieRatingListRelationFilter } from "../inputs/MovieRatingListRelationFilter";
import { MovieSpokenLanguageListRelationFilter } from "../inputs/MovieSpokenLanguageListRelationFilter";
import { MovieStatsNullableRelationFilter } from "../inputs/MovieStatsNullableRelationFilter";
import { MovieStudioListRelationFilter } from "../inputs/MovieStudioListRelationFilter";
import { MovifierAppUserListRelationFilter } from "../inputs/MovifierAppUserListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWhereInput", {})
export class MovieWhereInput {
  @TypeGraphQL.Field((_type) => [MovieWhereInput], {
    nullable: true,
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereInput], {
    nullable: true,
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereInput], {
    nullable: true,
  })
  NOT?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoNullableRelationFilter, {
    nullable: true,
  })
  movieInfo?: MovieInfoNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsNullableRelationFilter, {
    nullable: true,
  })
  MovieStats?: MovieStatsNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberListRelationFilter, {
    nullable: true,
  })
  crewMembers?: MovieCrewMemberListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioListRelationFilter, {
    nullable: true,
  })
  studios?: MovieStudioListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => GenreListRelationFilter, {
    nullable: true,
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryListRelationFilter, {
    nullable: true,
  })
  keywordCategories?: MovieKeywordCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingListRelationFilter, {
    nullable: true,
  })
  ratings?: MovieRatingListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListListRelationFilter, {
    nullable: true,
  })
  movieLists?: MovieListListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserListRelationFilter, {
    nullable: true,
  })
  inWatchlistByUsers?: MovifierAppUserListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageListRelationFilter, {
    nullable: true,
  })
  spokenLanguages?: MovieSpokenLanguageListRelationFilter | undefined;
}
