import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserCreateOrConnectWithoutWatchlistInput",
  {},
)
export class MovifierAppUserCreateOrConnectWithoutWatchlistInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: false,
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserCreateWithoutWatchlistInput, {
    nullable: false,
  })
  create!: MovifierAppUserCreateWithoutWatchlistInput;
}
