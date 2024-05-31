import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCountOrderByAggregateInput } from "../inputs/MovieListLikedByUserCountOrderByAggregateInput";
import { MovieListLikedByUserMaxOrderByAggregateInput } from "../inputs/MovieListLikedByUserMaxOrderByAggregateInput";
import { MovieListLikedByUserMinOrderByAggregateInput } from "../inputs/MovieListLikedByUserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListLikedByUserOrderByWithAggregationInput", {})
export class MovieListLikedByUserOrderByWithAggregationInput {
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
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieListLikedByUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieListLikedByUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieListLikedByUserMinOrderByAggregateInput | undefined;
}
