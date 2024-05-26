import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserWhereInput } from "../../inputs/MovieListLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class MovifierAppUserCountMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieListLikedByUserWhereInput | undefined;
}
