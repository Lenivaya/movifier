import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserOrderByWithAggregationInput } from "../../../inputs/MovieWatchedByUserOrderByWithAggregationInput";
import { MovieWatchedByUserScalarWhereWithAggregatesInput } from "../../../inputs/MovieWatchedByUserScalarWhereWithAggregatesInput";
import { MovieWatchedByUserWhereInput } from "../../../inputs/MovieWatchedByUserWhereInput";
import { MovieWatchedByUserScalarFieldEnum } from "../../../../enums/MovieWatchedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  where?: MovieWatchedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieWatchedByUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "userId" | "movieId">;

  @TypeGraphQL.Field(_type => MovieWatchedByUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieWatchedByUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
