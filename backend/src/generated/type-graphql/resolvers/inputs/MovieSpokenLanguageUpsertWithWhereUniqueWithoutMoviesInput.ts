import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCreateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateWithoutMoviesInput";
import { MovieSpokenLanguageUpdateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageUpdateWithoutMoviesInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.InputType("MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput", {})
export class MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false
  })
  where!: MovieSpokenLanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: MovieSpokenLanguageUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: MovieSpokenLanguageCreateWithoutMoviesInput;
}
