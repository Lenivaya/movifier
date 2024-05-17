import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingAvgOrderByAggregateInput } from "../inputs/MovieRatingAvgOrderByAggregateInput";
import { MovieRatingCountOrderByAggregateInput } from "../inputs/MovieRatingCountOrderByAggregateInput";
import { MovieRatingMaxOrderByAggregateInput } from "../inputs/MovieRatingMaxOrderByAggregateInput";
import { MovieRatingMinOrderByAggregateInput } from "../inputs/MovieRatingMinOrderByAggregateInput";
import { MovieRatingSumOrderByAggregateInput } from "../inputs/MovieRatingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieRatingOrderByWithAggregationInput", {})
export class MovieRatingOrderByWithAggregationInput {
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
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieRatingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MovieRatingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieRatingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieRatingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MovieRatingSumOrderByAggregateInput | undefined;
}
