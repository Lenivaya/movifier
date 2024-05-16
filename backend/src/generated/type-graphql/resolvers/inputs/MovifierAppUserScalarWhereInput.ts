import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMoviefireAppUserRoleFilter } from "../inputs/EnumMoviefireAppUserRoleFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovifierAppUserScalarWhereInput", {})
export class MovifierAppUserScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovifierAppUserScalarWhereInput], {
    nullable: true,
  })
  AND?: MovifierAppUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserScalarWhereInput], {
    nullable: true,
  })
  OR?: MovifierAppUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovifierAppUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  password_hash?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumMoviefireAppUserRoleFilter, {
    nullable: true,
  })
  role?: EnumMoviefireAppUserRoleFilter | undefined;
}
