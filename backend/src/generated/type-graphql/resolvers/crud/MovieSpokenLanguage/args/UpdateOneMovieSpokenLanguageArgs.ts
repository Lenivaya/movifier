import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageUpdateInput } from "../../../inputs/MovieSpokenLanguageUpdateInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../../../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieSpokenLanguageArgs {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageUpdateInput, {
    nullable: false,
  })
  data!: MovieSpokenLanguageUpdateInput;

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieSpokenLanguageWhereUniqueInput;
}
