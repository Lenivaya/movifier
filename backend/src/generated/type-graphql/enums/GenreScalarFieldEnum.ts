import * as TypeGraphQL from "type-graphql";

export enum GenreScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(GenreScalarFieldEnum, {
  name: "GenreScalarFieldEnum",
  description: undefined,
});
