import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCountOrderByAggregateInput } from "../inputs/MovieStudioCountOrderByAggregateInput";
import { MovieStudioMaxOrderByAggregateInput } from "../inputs/MovieStudioMaxOrderByAggregateInput";
import { MovieStudioMinOrderByAggregateInput } from "../inputs/MovieStudioMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieStudioOrderByWithAggregationInput", {})
export class MovieStudioOrderByWithAggregationInput {
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

  @TypeGraphQL.Field((_type) => MovieStudioCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieStudioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieStudioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieStudioMinOrderByAggregateInput | undefined;
}
