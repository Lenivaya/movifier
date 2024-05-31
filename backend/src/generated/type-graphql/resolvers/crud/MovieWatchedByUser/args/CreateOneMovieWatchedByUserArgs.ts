import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserCreateInput } from "../../../inputs/MovieWatchedByUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateInput, {
    nullable: false
  })
  data!: MovieWatchedByUserCreateInput;
}
