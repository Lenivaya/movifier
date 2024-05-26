import * as TypeGraphQL from "type-graphql";

export enum MovieStatsScalarFieldEnum {
  id = "id",
  timesWatchedCount = "timesWatchedCount",
  totalRatingsCount = "totalRatingsCount",
  totalLikesCount = "totalLikesCount",
  overallPlaceInTop = "overallPlaceInTop",
  avgRating = "avgRating",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieStatsScalarFieldEnum, {
  name: "MovieStatsScalarFieldEnum",
  description: undefined,
});
