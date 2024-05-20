import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMoviefireAppUserRoleFilter } from "../inputs/EnumMoviefireAppUserRoleFilter";
import { MovieListCommentListRelationFilter } from "../inputs/MovieListCommentListRelationFilter";
import { MovieListListRelationFilter } from "../inputs/MovieListListRelationFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovieRatingListRelationFilter } from "../inputs/MovieRatingListRelationFilter";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovifierAppUserWhereUniqueInput", {})
export class MovifierAppUserWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  AND?: MovifierAppUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  OR?: MovifierAppUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  NOT?: MovifierAppUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMoviefireAppUserRoleFilter, {
    nullable: true
  })
  role?: EnumMoviefireAppUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  watchlist?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRatingListRelationFilter, {
    nullable: true
  })
  rating?: MovieRatingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListListRelationFilter, {
    nullable: true
  })
  movieLists?: MovieListListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentListRelationFilter, {
    nullable: true
  })
  movieListsComments?: MovieListCommentListRelationFilter | undefined;
}
