import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCountOrderByAggregateInput } from "../inputs/MovieWatchedByUserCountOrderByAggregateInput";
import { MovieWatchedByUserMaxOrderByAggregateInput } from "../inputs/MovieWatchedByUserMaxOrderByAggregateInput";
import { MovieWatchedByUserMinOrderByAggregateInput } from "../inputs/MovieWatchedByUserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieWatchedByUserOrderByWithAggregationInput", {})
export class MovieWatchedByUserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieWatchedByUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieWatchedByUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieWatchedByUserMinOrderByAggregateInput | undefined;
}
