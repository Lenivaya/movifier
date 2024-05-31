import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserWhereInput } from "../../inputs/MovieWatchedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountWatchedByArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  where?: MovieWatchedByUserWhereInput | undefined;
}
