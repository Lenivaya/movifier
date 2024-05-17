import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageScalarWhereInput } from "../inputs/MovieSpokenLanguageScalarWhereInput";
import { MovieSpokenLanguageUpdateManyMutationInput } from "../inputs/MovieSpokenLanguageUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput",
  {},
)
export class MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageScalarWhereInput, {
    nullable: false,
  })
  where!: MovieSpokenLanguageScalarWhereInput;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieSpokenLanguageUpdateManyMutationInput;
}
