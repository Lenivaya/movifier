import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOrderByRelationAggregateInput } from "../inputs/MovieCrewMemberOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberTypeOrderByWithRelationInput", {})
export class MovieCrewMemberTypeOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOrderByRelationAggregateInput, {
    nullable: true,
  })
  movieCrewMembers?: MovieCrewMemberOrderByRelationAggregateInput | undefined;
}
