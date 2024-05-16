import * as TypeGraphQL from "type-graphql";

export enum MovieListStatsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  views = "views",
  likes = "likes",
  movieListId = "movieListId",
}
TypeGraphQL.registerEnumType(MovieListStatsScalarFieldEnum, {
  name: "MovieListStatsScalarFieldEnum",
  description: undefined,
});
