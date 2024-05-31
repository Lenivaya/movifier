import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserUpdateWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput", {})
export class MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchlistInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutWatchlistInput;
}
