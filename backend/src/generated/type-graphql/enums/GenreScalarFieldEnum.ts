import * as TypeGraphQL from "type-graphql";

export enum GenreScalarFieldEnum {
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(GenreScalarFieldEnum, {
  name: "GenreScalarFieldEnum",
  description: undefined,
});
