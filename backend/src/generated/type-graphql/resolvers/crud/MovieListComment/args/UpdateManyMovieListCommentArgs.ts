import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentUpdateManyMutationInput } from "../../../inputs/MovieListCommentUpdateManyMutationInput";
import { MovieListCommentWhereInput } from "../../../inputs/MovieListCommentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieListCommentArgs {
  @TypeGraphQL.Field(_type => MovieListCommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListCommentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieListCommentWhereInput, {
    nullable: true
  })
  where?: MovieListCommentWhereInput | undefined;
}
