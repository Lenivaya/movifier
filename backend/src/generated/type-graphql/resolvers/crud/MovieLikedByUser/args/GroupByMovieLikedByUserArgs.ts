import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserOrderByWithAggregationInput } from "../../../inputs/MovieLikedByUserOrderByWithAggregationInput";
import { MovieLikedByUserScalarWhereWithAggregatesInput } from "../../../inputs/MovieLikedByUserScalarWhereWithAggregatesInput";
import { MovieLikedByUserWhereInput } from "../../../inputs/MovieLikedByUserWhereInput";
import { MovieLikedByUserScalarFieldEnum } from "../../../../enums/MovieLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieLikedByUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "userId" | "movieId">;

  @TypeGraphQL.Field(_type => MovieLikedByUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieLikedByUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
