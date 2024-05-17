import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutWatchlistInput";
import { MovifierAppUserCreateWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateWithoutWatchlistInput";
import { MovifierAppUserScalarWhereInput } from "../inputs/MovifierAppUserScalarWhereInput";
import { MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput";
import { MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput";
import { MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput } from "../inputs/MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserUpdateManyWithoutWatchlistNestedInput",
  {},
)
export class MovifierAppUserUpdateManyWithoutWatchlistNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserWhereUniqueInput], {
    nullable: true,
  })
  set?: MovifierAppUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovifierAppUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovifierAppUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovifierAppUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput],
    {
      nullable: true,
    },
  )
  update?:
    | MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovifierAppUserScalarWhereInput[] | undefined;
}
