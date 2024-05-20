import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCountOrderByAggregateInput } from "../inputs/MovieKeywordCategoryCountOrderByAggregateInput";
import { MovieKeywordCategoryMaxOrderByAggregateInput } from "../inputs/MovieKeywordCategoryMaxOrderByAggregateInput";
import { MovieKeywordCategoryMinOrderByAggregateInput } from "../inputs/MovieKeywordCategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieKeywordCategoryOrderByWithAggregationInput", {})
export class MovieKeywordCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieKeywordCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieKeywordCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieKeywordCategoryMinOrderByAggregateInput | undefined;
}
