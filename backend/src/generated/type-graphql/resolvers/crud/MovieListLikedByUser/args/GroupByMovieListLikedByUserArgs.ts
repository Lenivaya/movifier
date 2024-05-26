import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserOrderByWithAggregationInput } from "../../../inputs/MovieListLikedByUserOrderByWithAggregationInput";
import { MovieListLikedByUserScalarWhereWithAggregatesInput } from "../../../inputs/MovieListLikedByUserScalarWhereWithAggregatesInput";
import { MovieListLikedByUserWhereInput } from "../../../inputs/MovieListLikedByUserWhereInput";
import { MovieListLikedByUserScalarFieldEnum } from "../../../../enums/MovieListLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieListLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieListLikedByUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "userId" | "movieListId">;

  @TypeGraphQL.Field(_type => MovieListLikedByUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieListLikedByUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
