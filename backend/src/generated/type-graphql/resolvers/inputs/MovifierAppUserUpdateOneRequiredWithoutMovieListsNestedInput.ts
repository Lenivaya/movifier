import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutMovieListsInput";
import { MovifierAppUserCreateWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput";
import { MovifierAppUserUpsertWithoutMovieListsInput } from "../inputs/MovifierAppUserUpsertWithoutMovieListsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput",
  {},
)
export class MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserCreateWithoutMovieListsInput, {
    nullable: true,
  })
  create?: MovifierAppUserCreateWithoutMovieListsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserCreateOrConnectWithoutMovieListsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovifierAppUserCreateOrConnectWithoutMovieListsInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserUpsertWithoutMovieListsInput, {
    nullable: true,
  })
  upsert?: MovifierAppUserUpsertWithoutMovieListsInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput,
    {
      nullable: true,
    },
  )
  update?:
    | MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput
    | undefined;
}
