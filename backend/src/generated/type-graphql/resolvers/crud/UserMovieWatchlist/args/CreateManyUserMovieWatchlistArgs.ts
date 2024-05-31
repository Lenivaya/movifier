import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistCreateManyInput } from "../../../inputs/UserMovieWatchlistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserMovieWatchlistArgs {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateManyInput], {
    nullable: false
  })
  data!: UserMovieWatchlistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
