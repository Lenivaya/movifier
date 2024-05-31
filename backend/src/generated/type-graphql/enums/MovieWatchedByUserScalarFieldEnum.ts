import * as TypeGraphQL from "type-graphql";

export enum MovieWatchedByUserScalarFieldEnum {
  createdAt = "createdAt",
  userId = "userId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieWatchedByUserScalarFieldEnum, {
  name: "MovieWatchedByUserScalarFieldEnum",
  description: undefined,
});
