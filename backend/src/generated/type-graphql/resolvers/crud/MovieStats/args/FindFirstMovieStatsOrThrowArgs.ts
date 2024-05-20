import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieStatsOrderByWithRelationAndSearchRelevanceInput";
import { MovieStatsWhereInput } from "../../../inputs/MovieStatsWhereInput";
import { MovieStatsWhereUniqueInput } from "../../../inputs/MovieStatsWhereUniqueInput";
import { MovieStatsScalarFieldEnum } from "../../../../enums/MovieStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMovieStatsOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  where?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieStatsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieStatsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "timesWatchedCount" | "totalRatingsCount" | "totalLikesCount" | "overallPlaceINTop" | "avgRating" | "movieId"> | undefined;
}
