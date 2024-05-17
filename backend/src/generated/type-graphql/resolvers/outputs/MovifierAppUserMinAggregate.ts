import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.ObjectType("MovifierAppUserMinAggregate", {})
export class MovifierAppUserMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  username!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  password!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => MoviefireAppUserRole, {
    nullable: true,
  })
  role!: "USER" | "ADMIN" | null;
}
