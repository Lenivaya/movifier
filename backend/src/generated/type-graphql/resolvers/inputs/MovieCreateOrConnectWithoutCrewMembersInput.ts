import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutCrewMembersInput } from "../inputs/MovieCreateWithoutCrewMembersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutCrewMembersInput", {})
export class MovieCreateOrConnectWithoutCrewMembersInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutCrewMembersInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutCrewMembersInput;
}
