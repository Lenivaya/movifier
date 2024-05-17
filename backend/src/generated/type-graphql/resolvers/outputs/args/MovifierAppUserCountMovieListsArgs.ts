import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListWhereInput } from "../../inputs/MovieListWhereInput";

@TypeGraphQL.ArgsType()
export class MovifierAppUserCountMovieListsArgs {
  @TypeGraphQL.Field((_type) => MovieListWhereInput, {
    nullable: true,
  })
  where?: MovieListWhereInput | undefined;
}
