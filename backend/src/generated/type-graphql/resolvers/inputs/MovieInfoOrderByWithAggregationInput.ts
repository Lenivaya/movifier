import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoAvgOrderByAggregateInput } from "../inputs/MovieInfoAvgOrderByAggregateInput";
import { MovieInfoCountOrderByAggregateInput } from "../inputs/MovieInfoCountOrderByAggregateInput";
import { MovieInfoMaxOrderByAggregateInput } from "../inputs/MovieInfoMaxOrderByAggregateInput";
import { MovieInfoMinOrderByAggregateInput } from "../inputs/MovieInfoMinOrderByAggregateInput";
import { MovieInfoSumOrderByAggregateInput } from "../inputs/MovieInfoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieInfoOrderByWithAggregationInput", {})
export class MovieInfoOrderByWithAggregationInput {
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
  imdbId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alternativeTitles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  durationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  posterUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  releaseDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieInfoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieInfoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieInfoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieInfoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieInfoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieInfoSumOrderByAggregateInput | undefined;
}
