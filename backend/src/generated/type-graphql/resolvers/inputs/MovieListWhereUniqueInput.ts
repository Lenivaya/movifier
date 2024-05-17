import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListCommentListRelationFilter } from "../inputs/MovieListCommentListRelationFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovieListStatsNullableRelationFilter } from "../inputs/MovieListStatsNullableRelationFilter";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieListWhereUniqueInput", {})
export class MovieListWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereInput], {
    nullable: true,
  })
  AND?: MovieListWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereInput], {
    nullable: true,
  })
  OR?: MovieListWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereInput], {
    nullable: true,
  })
  NOT?: MovieListWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movies?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserRelationFilter, {
    nullable: true,
  })
  movieListAuthor?: MovifierAppUserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsNullableRelationFilter, {
    nullable: true,
  })
  MovieListStats?: MovieListStatsNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentListRelationFilter, {
    nullable: true,
  })
  movieListComments?: MovieListCommentListRelationFilter | undefined;
}
