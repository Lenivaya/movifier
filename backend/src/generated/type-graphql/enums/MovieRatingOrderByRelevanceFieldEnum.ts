import * as TypeGraphQL from "type-graphql";

export enum MovieRatingOrderByRelevanceFieldEnum {
  id = "id",
  movieId = "movieId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MovieRatingOrderByRelevanceFieldEnum, {
  name: "MovieRatingOrderByRelevanceFieldEnum",
  description: undefined,
});
