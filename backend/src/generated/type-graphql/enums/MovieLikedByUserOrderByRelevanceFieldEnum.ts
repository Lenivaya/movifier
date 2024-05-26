import * as TypeGraphQL from "type-graphql";

export enum MovieLikedByUserOrderByRelevanceFieldEnum {
  userId = "userId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieLikedByUserOrderByRelevanceFieldEnum, {
  name: "MovieLikedByUserOrderByRelevanceFieldEnum",
  description: undefined,
});
