import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageCreateInput } from "../../../inputs/MovieSpokenLanguageCreateInput";
import { MovieSpokenLanguageUpdateInput } from "../../../inputs/MovieSpokenLanguageUpdateInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../../../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieSpokenLanguageArgs {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false
  })
  where!: MovieSpokenLanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageCreateInput, {
    nullable: false
  })
  create!: MovieSpokenLanguageCreateInput;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageUpdateInput, {
    nullable: false
  })
  update!: MovieSpokenLanguageUpdateInput;
}
