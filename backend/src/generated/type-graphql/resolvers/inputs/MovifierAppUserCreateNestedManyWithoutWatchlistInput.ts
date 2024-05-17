import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutWatchlistInput";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserCreateNestedManyWithoutWatchlistInput",
  {},
)
export class MovifierAppUserCreateNestedManyWithoutWatchlistInput {
  @TypeGraphQL.Field((_type) => [MovifierAppUserCreateWithoutWatchlistInput], {
    nullable: true,
  })
  create?: MovifierAppUserCreateWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserCreateOrConnectWithoutWatchlistInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovifierAppUserCreateOrConnectWithoutWatchlistInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovifierAppUserWhereUniqueInput[] | undefined;
}
