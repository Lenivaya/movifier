import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentCreateInput } from "../../../inputs/MovieListCommentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieListCommentArgs {
  @TypeGraphQL.Field((_type) => MovieListCommentCreateInput, {
    nullable: false,
  })
  data!: MovieListCommentCreateInput;
}
