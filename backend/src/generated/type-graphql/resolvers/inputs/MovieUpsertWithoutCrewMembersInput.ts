import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutCrewMembersInput } from "../inputs/MovieCreateWithoutCrewMembersInput";
import { MovieUpdateWithoutCrewMembersInput } from "../inputs/MovieUpdateWithoutCrewMembersInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutCrewMembersInput", {})
export class MovieUpsertWithoutCrewMembersInput {
  @TypeGraphQL.Field((_type) => MovieUpdateWithoutCrewMembersInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutCrewMembersInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutCrewMembersInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutCrewMembersInput;

  @TypeGraphQL.Field((_type) => MovieWhereInput, {
    nullable: true,
  })
  where?: MovieWhereInput | undefined;
}
