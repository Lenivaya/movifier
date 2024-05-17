import * as TypeGraphQL from "type-graphql";

export enum MovieCrewMemberScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  movieCrewMemberTypeId = "movieCrewMemberTypeId",
}
TypeGraphQL.registerEnumType(MovieCrewMemberScalarFieldEnum, {
  name: "MovieCrewMemberScalarFieldEnum",
  description: undefined,
});
