import * as TypeGraphQL from "type-graphql";

export enum MoviefireAppUserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}
TypeGraphQL.registerEnumType(MoviefireAppUserRole, {
  name: "MoviefireAppUserRole",
  description: undefined,
});
