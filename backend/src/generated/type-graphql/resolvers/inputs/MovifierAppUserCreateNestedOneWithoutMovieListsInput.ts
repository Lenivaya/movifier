import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutMovieListsInput";
import { MovifierAppUserCreateWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserCreateNestedOneWithoutMovieListsInput",
  {},
)
export class MovifierAppUserCreateNestedOneWithoutMovieListsInput {
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

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;
}
