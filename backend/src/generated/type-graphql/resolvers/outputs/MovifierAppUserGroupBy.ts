import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCountAggregate } from "../outputs/MovifierAppUserCountAggregate";
import { MovifierAppUserMaxAggregate } from "../outputs/MovifierAppUserMaxAggregate";
import { MovifierAppUserMinAggregate } from "../outputs/MovifierAppUserMinAggregate";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.ObjectType("MovifierAppUserGroupBy", {})
export class MovifierAppUserGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password_hash!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => MoviefireAppUserRole, {
    nullable: false,
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field((_type) => MovifierAppUserCountAggregate, {
    nullable: true,
  })
  _count!: MovifierAppUserCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovifierAppUserMinAggregate, {
    nullable: true,
  })
  _min!: MovifierAppUserMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovifierAppUserMaxAggregate, {
    nullable: true,
  })
  _max!: MovifierAppUserMaxAggregate | null;
}
