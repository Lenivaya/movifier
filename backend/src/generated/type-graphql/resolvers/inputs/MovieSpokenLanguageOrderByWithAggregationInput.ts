import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCountOrderByAggregateInput } from "../inputs/MovieSpokenLanguageCountOrderByAggregateInput";
import { MovieSpokenLanguageMaxOrderByAggregateInput } from "../inputs/MovieSpokenLanguageMaxOrderByAggregateInput";
import { MovieSpokenLanguageMinOrderByAggregateInput } from "../inputs/MovieSpokenLanguageMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieSpokenLanguageOrderByWithAggregationInput", {})
export class MovieSpokenLanguageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieSpokenLanguageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieSpokenLanguageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieSpokenLanguageMinOrderByAggregateInput | undefined;
}
