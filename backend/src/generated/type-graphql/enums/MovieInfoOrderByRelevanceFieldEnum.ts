import * as TypeGraphQL from "type-graphql";

export enum MovieInfoOrderByRelevanceFieldEnum {
  id = "id",
  imdbId = "imdbId",
  title = "title",
  description = "description",
  alternativeTitles = "alternativeTitles",
  posterUrl = "posterUrl",
  movieId = "movieId",
}
TypeGraphQL.registerEnumType(MovieInfoOrderByRelevanceFieldEnum, {
  name: "MovieInfoOrderByRelevanceFieldEnum",
  description: undefined,
});
