import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCountOrderByAggregateInput } from "../inputs/MovieListCountOrderByAggregateInput";
import { MovieListMaxOrderByAggregateInput } from "../inputs/MovieListMaxOrderByAggregateInput";
import { MovieListMinOrderByAggregateInput } from "../inputs/MovieListMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListOrderByWithAggregationInput", {})
export class MovieListOrderByWithAggregationInput {
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

  @TypeGraphQL.Field((_type) => MovieListCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieListMinOrderByAggregateInput | undefined;
}
