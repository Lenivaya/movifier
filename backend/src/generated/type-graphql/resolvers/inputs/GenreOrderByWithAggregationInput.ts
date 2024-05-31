import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCountOrderByAggregateInput } from "../inputs/GenreCountOrderByAggregateInput";
import { GenreMaxOrderByAggregateInput } from "../inputs/GenreMaxOrderByAggregateInput";
import { GenreMinOrderByAggregateInput } from "../inputs/GenreMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenreOrderByWithAggregationInput", {})
export class GenreOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenreCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GenreCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GenreMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GenreMinOrderByAggregateInput | undefined;
}
