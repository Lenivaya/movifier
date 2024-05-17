import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentOrderByRelationAggregateInput } from "../inputs/MovieListCommentOrderByRelationAggregateInput";
import { MovieListStatsOrderByWithRelationInput } from "../inputs/MovieListStatsOrderByWithRelationInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { MovifierAppUserOrderByWithRelationInput } from "../inputs/MovifierAppUserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListOrderByWithRelationInput", {})
export class MovieListOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByRelationAggregateInput, {
    nullable: true,
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserOrderByWithRelationInput, {
    nullable: true,
  })
  movieListAuthor?: MovifierAppUserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsOrderByWithRelationInput, {
    nullable: true,
  })
  MovieListStats?: MovieListStatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  movieListComments?: MovieListCommentOrderByRelationAggregateInput | undefined;
}
