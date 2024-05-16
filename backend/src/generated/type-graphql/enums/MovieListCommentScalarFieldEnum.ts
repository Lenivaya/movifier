import * as TypeGraphQL from "type-graphql";

export enum MovieListCommentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  movieListId = "movieListId",
  userId = "userId",
}
TypeGraphQL.registerEnumType(MovieListCommentScalarFieldEnum, {
  name: "MovieListCommentScalarFieldEnum",
  description: undefined,
});
