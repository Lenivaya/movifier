import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeOrderByWithRelationInput } from "../inputs/MovieCrewMemberTypeOrderByWithRelationInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOrderByWithRelationInput", {})
export class MovieCrewMemberOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  movieCrewMemberTypeId?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByRelationAggregateInput, {
    nullable: true,
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeOrderByWithRelationInput, {
    nullable: true,
  })
  movieCrewMemberType?: MovieCrewMemberTypeOrderByWithRelationInput | undefined;
}
