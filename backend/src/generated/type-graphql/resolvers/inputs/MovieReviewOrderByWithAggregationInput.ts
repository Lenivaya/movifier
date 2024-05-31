import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCountOrderByAggregateInput } from "../inputs/MovieReviewCountOrderByAggregateInput";
import { MovieReviewMaxOrderByAggregateInput } from "../inputs/MovieReviewMaxOrderByAggregateInput";
import { MovieReviewMinOrderByAggregateInput } from "../inputs/MovieReviewMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewOrderByWithAggregationInput", {})
export class MovieReviewOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ratingId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieReviewMinOrderByAggregateInput | undefined;
}
