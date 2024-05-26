import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserOrderByWithAggregationInput } from "../../../inputs/MovieReviewLikedByUserOrderByWithAggregationInput";
import { MovieReviewLikedByUserScalarWhereWithAggregatesInput } from "../../../inputs/MovieReviewLikedByUserScalarWhereWithAggregatesInput";
import { MovieReviewLikedByUserWhereInput } from "../../../inputs/MovieReviewLikedByUserWhereInput";
import { MovieReviewLikedByUserScalarFieldEnum } from "../../../../enums/MovieReviewLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieReviewLikedByUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "userId" | "movieReviewId">;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieReviewLikedByUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
