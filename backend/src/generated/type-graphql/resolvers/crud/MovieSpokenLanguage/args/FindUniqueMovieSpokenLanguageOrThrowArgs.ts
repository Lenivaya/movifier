import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageWhereUniqueInput } from "../../../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieSpokenLanguageOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereUniqueInput, {
    nullable: false
  })
  where!: MovieSpokenLanguageWhereUniqueInput;
}
