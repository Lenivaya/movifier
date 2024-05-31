import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserUpdateWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateWithoutWatchlistInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutWatchlistInput", {})
export class MovifierAppUserUpsertWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchlistInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
