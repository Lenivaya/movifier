import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageUpdateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageUpdateWithoutMoviesInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput",
  {},
)
export class MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieSpokenLanguageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: MovieSpokenLanguageUpdateWithoutMoviesInput;
}
