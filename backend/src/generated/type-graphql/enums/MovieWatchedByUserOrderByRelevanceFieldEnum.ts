import * as TypeGraphQL from "type-graphql";

export enum MovieWatchedByUserOrderByRelevanceFieldEnum {
  userId = "userId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieWatchedByUserOrderByRelevanceFieldEnum, {
  name: "MovieWatchedByUserOrderByRelevanceFieldEnum",
  description: undefined,
});
