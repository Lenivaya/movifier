import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentOrderByWithAggregationInput } from "../../../inputs/MovieListCommentOrderByWithAggregationInput";
import { MovieListCommentScalarWhereWithAggregatesInput } from "../../../inputs/MovieListCommentScalarWhereWithAggregatesInput";
import { MovieListCommentWhereInput } from "../../../inputs/MovieListCommentWhereInput";
import { MovieListCommentScalarFieldEnum } from "../../../../enums/MovieListCommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieListCommentArgs {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereInput, {
    nullable: true,
  })
  where?: MovieListCommentWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MovieListCommentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCommentScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "createdAt" | "updatedAt" | "content" | "movieListId" | "userId"
  >;

  @TypeGraphQL.Field(
    (_type) => MovieListCommentScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: MovieListCommentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
