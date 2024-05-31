import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistCreateInput } from "../../../inputs/UserMovieWatchlistCreateInput";
import { UserMovieWatchlistUpdateInput } from "../../../inputs/UserMovieWatchlistUpdateInput";
import { UserMovieWatchlistWhereUniqueInput } from "../../../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateInput, {
    nullable: false
  })
  create!: UserMovieWatchlistCreateInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateInput, {
    nullable: false
  })
  update!: UserMovieWatchlistUpdateInput;
}
