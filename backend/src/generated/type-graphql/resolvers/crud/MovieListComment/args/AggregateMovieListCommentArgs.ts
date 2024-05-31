import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieListCommentOrderByWithRelationAndSearchRelevanceInput";
import { MovieListCommentWhereInput } from "../../../inputs/MovieListCommentWhereInput";
import { MovieListCommentWhereUniqueInput } from "../../../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieListCommentArgs {
  @TypeGraphQL.Field(_type => MovieListCommentWhereInput, {
    nullable: true
  })
  where?: MovieListCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieListCommentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieListCommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
