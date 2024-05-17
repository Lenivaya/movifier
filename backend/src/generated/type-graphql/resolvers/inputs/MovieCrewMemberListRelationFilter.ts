import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberListRelationFilter", {})
export class MovieCrewMemberListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  every?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  some?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  none?: MovieCrewMemberWhereInput | undefined;
}
