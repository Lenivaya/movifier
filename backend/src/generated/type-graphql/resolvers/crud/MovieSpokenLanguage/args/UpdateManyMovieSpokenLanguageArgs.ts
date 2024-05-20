import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageUpdateManyMutationInput } from "../../../inputs/MovieSpokenLanguageUpdateManyMutationInput";
import { MovieSpokenLanguageWhereInput } from "../../../inputs/MovieSpokenLanguageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieSpokenLanguageArgs {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieSpokenLanguageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereInput, {
    nullable: true
  })
  where?: MovieSpokenLanguageWhereInput | undefined;
}
