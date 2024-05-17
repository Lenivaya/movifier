import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumMoviefireAppUserRoleWithAggregatesFilter } from "../inputs/EnumMoviefireAppUserRoleWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovifierAppUserScalarWhereWithAggregatesInput", {})
export class MovifierAppUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovifierAppUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovifierAppUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovifierAppUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  username?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumMoviefireAppUserRoleWithAggregatesFilter, {
    nullable: true,
  })
  role?: EnumMoviefireAppUserRoleWithAggregatesFilter | undefined;
}
