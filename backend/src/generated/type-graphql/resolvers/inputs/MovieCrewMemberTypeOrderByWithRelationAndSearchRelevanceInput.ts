import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOrderByRelationAggregateInput } from "../inputs/MovieCrewMemberOrderByRelationAggregateInput";
import { MovieCrewMemberTypeOrderByRelevanceInput } from "../inputs/MovieCrewMemberTypeOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieCrewMemberTypeOrderByRelevanceInput | undefined;
}
