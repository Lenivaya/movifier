import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserListRelationFilter", {})
export class MovifierAppUserListRelationFilter {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  every?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  some?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  none?: MovifierAppUserWhereInput | undefined;
}
