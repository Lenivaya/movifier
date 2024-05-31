import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountOrderByAggregateInput } from "../inputs/MovieCountOrderByAggregateInput";
import { MovieMaxOrderByAggregateInput } from "../inputs/MovieMaxOrderByAggregateInput";
import { MovieMinOrderByAggregateInput } from "../inputs/MovieMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithAggregationInput", {})
export class MovieOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieMinOrderByAggregateInput | undefined;
}
