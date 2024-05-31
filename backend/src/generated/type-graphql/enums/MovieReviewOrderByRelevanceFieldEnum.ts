import * as TypeGraphQL from "type-graphql";

export enum MovieReviewOrderByRelevanceFieldEnum {
  id = "id",
  content = "content",
  ratingId = "ratingId"
}
TypeGraphQL.registerEnumType(MovieReviewOrderByRelevanceFieldEnum, {
  name: "MovieReviewOrderByRelevanceFieldEnum",
  description: undefined,
});
