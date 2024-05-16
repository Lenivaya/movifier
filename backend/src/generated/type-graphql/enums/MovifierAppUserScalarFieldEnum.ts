import * as TypeGraphQL from "type-graphql";

export enum MovifierAppUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  email = "email",
  username = "username",
  password_hash = "password_hash",
  name = "name",
  role = "role",
}
TypeGraphQL.registerEnumType(MovifierAppUserScalarFieldEnum, {
  name: "MovifierAppUserScalarFieldEnum",
  description: undefined,
});
