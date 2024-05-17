import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageCreateInput } from "../../../inputs/MovieSpokenLanguageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieSpokenLanguageArgs {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageCreateInput, {
    nullable: false,
  })
  data!: MovieSpokenLanguageCreateInput;
}
