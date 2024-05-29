import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistWhereUniqueInput } from "../../../inputs/UserMovieWatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserMovieWatchlistOrThrowArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: UserMovieWatchlistWhereUniqueInput;
}
