import * as TypeGraphQL from "type-graphql";

export enum MovieListOrderByRelevanceFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  tags = "tags",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MovieListOrderByRelevanceFieldEnum, {
  name: "MovieListOrderByRelevanceFieldEnum",
  description: undefined,
});
