import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistUpdateInput } from "../../../inputs/UserMovieWatchlistUpdateInput";
import { UserMovieWatchlistWhereUniqueInput } from "../../../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateInput, {
    nullable: false
  })
  data!: UserMovieWatchlistUpdateInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;
}
