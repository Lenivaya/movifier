import * as TypeGraphQL from "type-graphql";

export enum MovieCrewMemberOrderByRelevanceFieldEnum {
  id = "id",
  name = "name",
  photoUrl = "photoUrl",
  description = "description",
  imdbId = "imdbId"
}
TypeGraphQL.registerEnumType(MovieCrewMemberOrderByRelevanceFieldEnum, {
  name: "MovieCrewMemberOrderByRelevanceFieldEnum",
  description: undefined,
});
