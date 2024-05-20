import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeWhereInput } from "../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeRelationFilter", {})
export class MovieCrewMemberTypeRelationFilter {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  is?: MovieCrewMemberTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  isNot?: MovieCrewMemberTypeWhereInput | undefined;
}
