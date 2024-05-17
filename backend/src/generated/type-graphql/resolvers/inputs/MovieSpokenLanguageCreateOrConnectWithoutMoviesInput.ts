import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCreateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateWithoutMoviesInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieSpokenLanguageCreateOrConnectWithoutMoviesInput",
  {},
)
export class MovieSpokenLanguageCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieSpokenLanguageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieSpokenLanguageCreateWithoutMoviesInput;
}
