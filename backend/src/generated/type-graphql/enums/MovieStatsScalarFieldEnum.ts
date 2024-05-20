import * as TypeGraphQL from "type-graphql";

export enum MovieStatsScalarFieldEnum {
  id = "id",
  timesWatchedCount = "timesWatchedCount",
  totalRatingsCount = "totalRatingsCount",
  totalLikesCount = "totalLikesCount",
  overallPlaceINTop = "overallPlaceINTop",
  avgRating = "avgRating",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieStatsScalarFieldEnum, {
  name: "MovieStatsScalarFieldEnum",
  description: undefined,
});
