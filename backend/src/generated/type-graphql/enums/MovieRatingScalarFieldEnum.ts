import * as TypeGraphQL from "type-graphql";

export enum MovieRatingScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  rating = "rating",
  movieId = "movieId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MovieRatingScalarFieldEnum, {
  name: "MovieRatingScalarFieldEnum",
  description: undefined,
});
