import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMoviefireAppUserRoleFilter } from "../inputs/NestedEnumMoviefireAppUserRoleFilter";
import { NestedEnumMoviefireAppUserRoleWithAggregatesFilter } from "../inputs/NestedEnumMoviefireAppUserRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType("EnumMoviefireAppUserRoleWithAggregatesFilter", {})
export class EnumMoviefireAppUserRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => MoviefireAppUserRole, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [MoviefireAppUserRole], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [MoviefireAppUserRole], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMoviefireAppUserRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMoviefireAppUserRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMoviefireAppUserRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumMoviefireAppUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMoviefireAppUserRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumMoviefireAppUserRoleFilter | undefined;
}
