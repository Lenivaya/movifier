import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutSpokenLanguagesInput } from "../inputs/MovieCreateWithoutSpokenLanguagesInput";
import { MovieUpdateWithoutSpokenLanguagesInput } from "../inputs/MovieUpdateWithoutSpokenLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput",
  {},
)
export class MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutSpokenLanguagesInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutSpokenLanguagesInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutSpokenLanguagesInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutSpokenLanguagesInput;
}
