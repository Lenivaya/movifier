import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserCreateInput } from "../../../inputs/MovieListLikedByUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateInput, {
    nullable: false
  })
  data!: MovieListLikedByUserCreateInput;
}
