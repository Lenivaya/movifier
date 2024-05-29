import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistCreateInput } from "../../../inputs/UserMovieWatchlistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateInput, {
    nullable: false
  })
  data!: UserMovieWatchlistCreateInput;
}
