import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentWhereInput } from "../../inputs/MovieListCommentWhereInput";

@TypeGraphQL.ArgsType()
export class MovifierAppUserCountMovieListsCommentsArgs {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereInput, {
    nullable: true,
  })
  where?: MovieListCommentWhereInput | undefined;
}
