import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentCreateInput } from "../../../inputs/MovieListCommentCreateInput";
import { MovieListCommentUpdateInput } from "../../../inputs/MovieListCommentUpdateInput";
import { MovieListCommentWhereUniqueInput } from "../../../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieListCommentArgs {
  @TypeGraphQL.Field(_type => MovieListCommentWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCommentCreateInput, {
    nullable: false
  })
  create!: MovieListCommentCreateInput;

  @TypeGraphQL.Field(_type => MovieListCommentUpdateInput, {
    nullable: false
  })
  update!: MovieListCommentUpdateInput;
}
