import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserCreateInput } from "../../../inputs/MovieWatchedByUserCreateInput";
import { MovieWatchedByUserUpdateInput } from "../../../inputs/MovieWatchedByUserUpdateInput";
import { MovieWatchedByUserWhereUniqueInput } from "../../../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateInput, {
    nullable: false
  })
  create!: MovieWatchedByUserCreateInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateInput, {
    nullable: false
  })
  update!: MovieWatchedByUserUpdateInput;
}
