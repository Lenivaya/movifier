import * as TypeGraphQL from "type-graphql";

export enum MovieLikedByUserScalarFieldEnum {
  createdAt = "createdAt",
  userId = "userId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieLikedByUserScalarFieldEnum, {
  name: "MovieLikedByUserScalarFieldEnum",
  description: undefined,
});
