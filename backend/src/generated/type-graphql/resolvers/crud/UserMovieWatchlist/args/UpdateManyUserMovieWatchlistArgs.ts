import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistUpdateManyMutationInput } from "../../../inputs/UserMovieWatchlistUpdateManyMutationInput";
import { UserMovieWatchlistWhereInput } from "../../../inputs/UserMovieWatchlistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserMovieWatchlistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  where?: UserMovieWatchlistWhereInput | undefined;
}
