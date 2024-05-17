import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageCreateManyInput } from "../../../inputs/MovieSpokenLanguageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieSpokenLanguageArgs {
  @TypeGraphQL.Field((_type) => [MovieSpokenLanguageCreateManyInput], {
    nullable: false,
  })
  data!: MovieSpokenLanguageCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
