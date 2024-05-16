import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentWhereUniqueInput } from "../../../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieListCommentOrThrowArgs {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;
}
