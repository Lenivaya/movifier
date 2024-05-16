import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutRatingInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutRatingInput";
import { MovifierAppUserCreateWithoutRatingInput } from "../inputs/MovifierAppUserCreateWithoutRatingInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateNestedOneWithoutRatingInput", {})
export class MovifierAppUserCreateNestedOneWithoutRatingInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserCreateWithoutRatingInput, {
    nullable: true,
  })
  create?: MovifierAppUserCreateWithoutRatingInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserCreateOrConnectWithoutRatingInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovifierAppUserCreateOrConnectWithoutRatingInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;
}
