import * as TypeGraphQL from "type-graphql";

export enum MovieListScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  userId = "userId"
}
TypeGraphQL.registerEnumType(MovieListScalarFieldEnum, {
  name: "MovieListScalarFieldEnum",
  description: undefined,
});
