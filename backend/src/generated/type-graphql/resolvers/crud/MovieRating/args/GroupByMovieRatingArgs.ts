import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingOrderByWithAggregationInput } from "../../../inputs/MovieRatingOrderByWithAggregationInput";
import { MovieRatingScalarWhereWithAggregatesInput } from "../../../inputs/MovieRatingScalarWhereWithAggregatesInput";
import { MovieRatingWhereInput } from "../../../inputs/MovieRatingWhereInput";
import { MovieRatingScalarFieldEnum } from "../../../../enums/MovieRatingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieRatingArgs {
  @TypeGraphQL.Field(_type => MovieRatingWhereInput, {
    nullable: true
  })
  where?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieRatingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "rating" | "movieId" | "userId">;

  @TypeGraphQL.Field(_type => MovieRatingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieRatingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
