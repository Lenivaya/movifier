import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCountOrderByAggregateInput } from "../inputs/MovieCrewMemberTypeCountOrderByAggregateInput";
import { MovieCrewMemberTypeMaxOrderByAggregateInput } from "../inputs/MovieCrewMemberTypeMaxOrderByAggregateInput";
import { MovieCrewMemberTypeMinOrderByAggregateInput } from "../inputs/MovieCrewMemberTypeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberTypeOrderByWithAggregationInput", {})
export class MovieCrewMemberTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCrewMemberTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieCrewMemberTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieCrewMemberTypeMinOrderByAggregateInput | undefined;
}
