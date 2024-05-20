import * as TypeGraphQL from "type-graphql";

export enum MovieListCommentOrderByRelevanceFieldEnum {
  id = "id",
  content = "content",
  movieListId = "movieListId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MovieListCommentOrderByRelevanceFieldEnum, {
  name: "MovieListCommentOrderByRelevanceFieldEnum",
  description: undefined,
});
