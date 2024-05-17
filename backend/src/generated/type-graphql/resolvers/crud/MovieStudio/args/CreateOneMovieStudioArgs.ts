import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioCreateInput } from "../../../inputs/MovieStudioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieStudioArgs {
  @TypeGraphQL.Field((_type) => MovieStudioCreateInput, {
    nullable: false,
  })
  data!: MovieStudioCreateInput;
}
