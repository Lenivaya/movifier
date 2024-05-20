import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWhereInput } from "../../inputs/MovieWhereInput";

@TypeGraphQL.ArgsType()
export class MovieListCountMoviesArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
