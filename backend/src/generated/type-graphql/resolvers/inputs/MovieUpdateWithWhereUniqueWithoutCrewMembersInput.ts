import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutCrewMembersInput } from "../inputs/MovieUpdateWithoutCrewMembersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateWithWhereUniqueWithoutCrewMembersInput", {})
export class MovieUpdateWithWhereUniqueWithoutCrewMembersInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutCrewMembersInput, {
    nullable: false,
  })
  data!: MovieUpdateWithoutCrewMembersInput;
}
