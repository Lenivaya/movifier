import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentUpdateInput } from "../../../inputs/MovieListCommentUpdateInput";
import { MovieListCommentWhereUniqueInput } from "../../../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieListCommentArgs {
  @TypeGraphQL.Field(_type => MovieListCommentUpdateInput, {
    nullable: false
  })
  data!: MovieListCommentUpdateInput;

  @TypeGraphQL.Field(_type => MovieListCommentWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListCommentWhereUniqueInput;
}
