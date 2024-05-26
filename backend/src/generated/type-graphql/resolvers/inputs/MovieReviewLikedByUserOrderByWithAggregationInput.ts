import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCountOrderByAggregateInput } from "../inputs/MovieReviewLikedByUserCountOrderByAggregateInput";
import { MovieReviewLikedByUserMaxOrderByAggregateInput } from "../inputs/MovieReviewLikedByUserMaxOrderByAggregateInput";
import { MovieReviewLikedByUserMinOrderByAggregateInput } from "../inputs/MovieReviewLikedByUserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewLikedByUserOrderByWithAggregationInput", {})
export class MovieReviewLikedByUserOrderByWithAggregationInput {
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
  movieReviewId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieReviewLikedByUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieReviewLikedByUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieReviewLikedByUserMinOrderByAggregateInput | undefined;
}
