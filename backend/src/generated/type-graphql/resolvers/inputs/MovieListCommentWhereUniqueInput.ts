import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieListCommentWhereInput } from "../inputs/MovieListCommentWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieListCommentWhereUniqueInput", {})
export class MovieListCommentWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereInput], {
    nullable: true,
  })
  AND?: MovieListCommentWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereInput], {
    nullable: true,
  })
  OR?: MovieListCommentWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentWhereInput], {
    nullable: true,
  })
  NOT?: MovieListCommentWhereInput[] | undefined;

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
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  movieListId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movieList?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserRelationFilter, {
    nullable: true,
  })
  user?: MovifierAppUserRelationFilter | undefined;
}
