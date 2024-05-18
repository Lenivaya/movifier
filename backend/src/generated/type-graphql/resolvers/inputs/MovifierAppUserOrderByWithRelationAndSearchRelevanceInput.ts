import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentOrderByRelationAggregateInput } from "../inputs/MovieListCommentOrderByRelationAggregateInput";
import { MovieListOrderByRelationAggregateInput } from "../inputs/MovieListOrderByRelationAggregateInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { MovieRatingOrderByRelationAggregateInput } from "../inputs/MovieRatingOrderByRelationAggregateInput";
import { MovifierAppUserOrderByRelevanceInput } from "../inputs/MovifierAppUserOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovifierAppUserOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovifierAppUserOrderByWithRelationAndSearchRelevanceInput {
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
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByRelationAggregateInput, {
    nullable: true,
  })
  watchlist?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingOrderByRelationAggregateInput, {
    nullable: true,
  })
  rating?: MovieRatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListOrderByRelationAggregateInput, {
    nullable: true,
  })
  movieLists?: MovieListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  movieListsComments?:
    | MovieListCommentOrderByRelationAggregateInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovifierAppUserOrderByRelevanceInput | undefined;
}
