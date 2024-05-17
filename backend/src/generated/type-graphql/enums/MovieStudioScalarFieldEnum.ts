import * as TypeGraphQL from "type-graphql";

export enum MovieStudioScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
}
TypeGraphQL.registerEnumType(MovieStudioScalarFieldEnum, {
  name: "MovieStudioScalarFieldEnum",
  description: undefined,
});
