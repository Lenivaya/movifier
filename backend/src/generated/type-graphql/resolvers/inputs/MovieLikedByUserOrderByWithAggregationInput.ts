import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCountOrderByAggregateInput } from "../inputs/MovieLikedByUserCountOrderByAggregateInput";
import { MovieLikedByUserMaxOrderByAggregateInput } from "../inputs/MovieLikedByUserMaxOrderByAggregateInput";
import { MovieLikedByUserMinOrderByAggregateInput } from "../inputs/MovieLikedByUserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieLikedByUserOrderByWithAggregationInput", {})
export class MovieLikedByUserOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MovieLikedByUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieLikedByUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieLikedByUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieLikedByUserMinOrderByAggregateInput | undefined;
}
