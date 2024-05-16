import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieListCommentScalarWhereWithAggregatesInput", {})
export class MovieListCommentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovieListCommentScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovieListCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovieListCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCommentScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovieListCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  movieListId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;
}
