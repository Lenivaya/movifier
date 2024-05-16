import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageWhereInput } from "../../inputs/MovieSpokenLanguageWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountSpokenLanguagesArgs {
  @TypeGraphQL.Field((_type) => MovieSpokenLanguageWhereInput, {
    nullable: true,
  })
  where?: MovieSpokenLanguageWhereInput | undefined;
}
