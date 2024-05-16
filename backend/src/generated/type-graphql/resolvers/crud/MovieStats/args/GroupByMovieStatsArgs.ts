import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsOrderByWithAggregationInput } from "../../../inputs/MovieStatsOrderByWithAggregationInput";
import { MovieStatsScalarWhereWithAggregatesInput } from "../../../inputs/MovieStatsScalarWhereWithAggregatesInput";
import { MovieStatsWhereInput } from "../../../inputs/MovieStatsWhereInput";
import { MovieStatsScalarFieldEnum } from "../../../../enums/MovieStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieStatsArgs {
  @TypeGraphQL.Field((_type) => MovieStatsWhereInput, {
    nullable: true,
  })
  where?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieStatsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MovieStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieStatsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "timesWatchedCount"
    | "totalRatingsCount"
    | "totalLikesCount"
    | "overallPlaceINTop"
    | "avgRating"
    | "movieId"
  >;

  @TypeGraphQL.Field((_type) => MovieStatsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MovieStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
