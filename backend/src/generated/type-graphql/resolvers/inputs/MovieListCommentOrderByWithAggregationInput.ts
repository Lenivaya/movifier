import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCountOrderByAggregateInput } from "../inputs/MovieListCommentCountOrderByAggregateInput";
import { MovieListCommentMaxOrderByAggregateInput } from "../inputs/MovieListCommentMaxOrderByAggregateInput";
import { MovieListCommentMinOrderByAggregateInput } from "../inputs/MovieListCommentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListCommentOrderByWithAggregationInput", {})
export class MovieListCommentOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieListCommentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieListCommentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieListCommentMinOrderByAggregateInput | undefined;
}
