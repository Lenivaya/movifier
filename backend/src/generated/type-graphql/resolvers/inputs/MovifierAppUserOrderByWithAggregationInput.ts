import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCountOrderByAggregateInput } from "../inputs/MovifierAppUserCountOrderByAggregateInput";
import { MovifierAppUserMaxOrderByAggregateInput } from "../inputs/MovifierAppUserMaxOrderByAggregateInput";
import { MovifierAppUserMinOrderByAggregateInput } from "../inputs/MovifierAppUserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovifierAppUserOrderByWithAggregationInput", {})
export class MovifierAppUserOrderByWithAggregationInput {
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
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovifierAppUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovifierAppUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovifierAppUserMinOrderByAggregateInput | undefined;
}
