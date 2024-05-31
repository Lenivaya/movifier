import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutRatedMoviesInput";
import { MovifierAppUserCreateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutRatedMoviesInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput";
import { MovifierAppUserUpsertWithoutRatedMoviesInput } from "../inputs/MovifierAppUserUpsertWithoutRatedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatedMoviesInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutRatedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutRatedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutRatedMoviesInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutRatedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput | undefined;
}
