import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType("NestedEnumMoviefireAppUserRoleFilter", {})
export class NestedEnumMoviefireAppUserRoleFilter {
  @TypeGraphQL.Field((_type) => MoviefireAppUserRole, {
    nullable: true,
  })
  equals?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field((_type) => [MoviefireAppUserRole], {
    nullable: true,
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field((_type) => [MoviefireAppUserRole], {
    nullable: true,
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumMoviefireAppUserRoleFilter, {
    nullable: true,
  })
  not?: NestedEnumMoviefireAppUserRoleFilter | undefined;
}
