import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserUpdateInput } from "../../../inputs/MovieWatchedByUserUpdateInput";
import { MovieWatchedByUserWhereUniqueInput } from "../../../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateInput, {
    nullable: false
  })
  data!: MovieWatchedByUserUpdateInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;
}
