import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutWatchlistInput";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput";
import { MovifierAppUserUpsertWithoutWatchlistInput } from "../inputs/MovifierAppUserUpsertWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchlistInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutWatchlistInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutWatchlistInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput | undefined;
}
