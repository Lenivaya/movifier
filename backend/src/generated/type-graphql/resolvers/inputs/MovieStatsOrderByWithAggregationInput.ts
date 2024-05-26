import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsAvgOrderByAggregateInput } from "../inputs/MovieStatsAvgOrderByAggregateInput";
import { MovieStatsCountOrderByAggregateInput } from "../inputs/MovieStatsCountOrderByAggregateInput";
import { MovieStatsMaxOrderByAggregateInput } from "../inputs/MovieStatsMaxOrderByAggregateInput";
import { MovieStatsMinOrderByAggregateInput } from "../inputs/MovieStatsMinOrderByAggregateInput";
import { MovieStatsSumOrderByAggregateInput } from "../inputs/MovieStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieStatsOrderByWithAggregationInput", {})
export class MovieStatsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesWatchedCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalRatingsCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalLikesCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  overallPlaceInTop?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  avgRating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieStatsSumOrderByAggregateInput | undefined;
}
