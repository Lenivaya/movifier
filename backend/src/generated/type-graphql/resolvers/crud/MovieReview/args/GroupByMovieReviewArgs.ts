import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewOrderByWithAggregationInput } from "../../../inputs/MovieReviewOrderByWithAggregationInput";
import { MovieReviewScalarWhereWithAggregatesInput } from "../../../inputs/MovieReviewScalarWhereWithAggregatesInput";
import { MovieReviewWhereInput } from "../../../inputs/MovieReviewWhereInput";
import { MovieReviewScalarFieldEnum } from "../../../../enums/MovieReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieReviewArgs {
  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  where?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieReviewOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MovieReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieReviewScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "content" | "ratingId">;

  @TypeGraphQL.Field((_type) => MovieReviewScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MovieReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
