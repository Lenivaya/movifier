import * as TypeGraphQL from "type-graphql";

export enum MovieCrewMemberScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  photoUrl = "photoUrl",
  description = "description",
  imdbId = "imdbId"
}
TypeGraphQL.registerEnumType(MovieCrewMemberScalarFieldEnum, {
  name: "MovieCrewMemberScalarFieldEnum",
  description: undefined,
});
