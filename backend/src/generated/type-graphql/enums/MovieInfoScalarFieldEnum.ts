import * as TypeGraphQL from "type-graphql";

export enum MovieInfoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  imdbId = "imdbId",
  title = "title",
  description = "description",
  alternativeTitles = "alternativeTitles",
  durationInMinutes = "durationInMinutes",
  posterUrl = "posterUrl",
  releaseDate = "releaseDate",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieInfoScalarFieldEnum, {
  name: "MovieInfoScalarFieldEnum",
  description: undefined,
});
