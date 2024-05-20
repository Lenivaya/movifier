import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutRatingInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutRatingInput";
import { MovifierAppUserCreateWithoutRatingInput } from "../inputs/MovifierAppUserCreateWithoutRatingInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutRatingInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutRatingInput";
import { MovifierAppUserUpsertWithoutRatingInput } from "../inputs/MovifierAppUserUpsertWithoutRatingInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatingInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutRatingInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutRatingInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutRatingInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutRatingInput | undefined;
}
