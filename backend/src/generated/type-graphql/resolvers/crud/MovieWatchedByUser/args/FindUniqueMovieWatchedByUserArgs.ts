import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserWhereUniqueInput } from "../../../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;
}
