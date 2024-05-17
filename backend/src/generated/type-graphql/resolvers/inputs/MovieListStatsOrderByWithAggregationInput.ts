import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsAvgOrderByAggregateInput } from "../inputs/MovieListStatsAvgOrderByAggregateInput";
import { MovieListStatsCountOrderByAggregateInput } from "../inputs/MovieListStatsCountOrderByAggregateInput";
import { MovieListStatsMaxOrderByAggregateInput } from "../inputs/MovieListStatsMaxOrderByAggregateInput";
import { MovieListStatsMinOrderByAggregateInput } from "../inputs/MovieListStatsMinOrderByAggregateInput";
import { MovieListStatsSumOrderByAggregateInput } from "../inputs/MovieListStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListStatsOrderByWithAggregationInput", {})
export class MovieListStatsOrderByWithAggregationInput {
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
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  likes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieListId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieListStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MovieListStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieListStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieListStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MovieListStatsSumOrderByAggregateInput | undefined;
}
