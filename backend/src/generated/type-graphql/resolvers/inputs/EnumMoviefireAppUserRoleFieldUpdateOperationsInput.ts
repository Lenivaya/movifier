import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType("EnumMoviefireAppUserRoleFieldUpdateOperationsInput", {})
export class EnumMoviefireAppUserRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MoviefireAppUserRole, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | undefined;
}
