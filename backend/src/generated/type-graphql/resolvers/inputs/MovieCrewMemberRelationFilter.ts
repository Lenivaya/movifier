import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberRelationFilter", {})
export class MovieCrewMemberRelationFilter {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  is?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  isNot?: MovieCrewMemberWhereInput | undefined;
}
