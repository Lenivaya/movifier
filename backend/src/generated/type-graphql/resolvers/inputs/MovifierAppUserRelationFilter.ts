import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserRelationFilter", {})
export class MovifierAppUserRelationFilter {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  is?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  isNot?: MovifierAppUserWhereInput | undefined;
}
