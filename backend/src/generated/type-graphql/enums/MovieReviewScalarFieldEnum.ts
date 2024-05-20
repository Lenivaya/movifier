import * as TypeGraphQL from "type-graphql";

export enum MovieReviewScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  ratingId = "ratingId"
}
TypeGraphQL.registerEnumType(MovieReviewScalarFieldEnum, {
  name: "MovieReviewScalarFieldEnum",
  description: undefined,
});
