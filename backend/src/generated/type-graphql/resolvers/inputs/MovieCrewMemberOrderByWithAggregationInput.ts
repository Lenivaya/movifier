import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberAvgOrderByAggregateInput } from "../inputs/MovieCrewMemberAvgOrderByAggregateInput";
import { MovieCrewMemberCountOrderByAggregateInput } from "../inputs/MovieCrewMemberCountOrderByAggregateInput";
import { MovieCrewMemberMaxOrderByAggregateInput } from "../inputs/MovieCrewMemberMaxOrderByAggregateInput";
import { MovieCrewMemberMinOrderByAggregateInput } from "../inputs/MovieCrewMemberMinOrderByAggregateInput";
import { MovieCrewMemberSumOrderByAggregateInput } from "../inputs/MovieCrewMemberSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOrderByWithAggregationInput", {})
export class MovieCrewMemberOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  photoUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  popularity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imdbId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCrewMemberCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieCrewMemberAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieCrewMemberMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieCrewMemberMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieCrewMemberSumOrderByAggregateInput | undefined;
}
