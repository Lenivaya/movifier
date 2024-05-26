import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutLikedMoviesInput";
import { MovifierAppUserCreateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutLikedMoviesInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput";
import { MovifierAppUserUpsertWithoutLikedMoviesInput } from "../inputs/MovifierAppUserUpsertWithoutLikedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMoviesInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutLikedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutLikedMoviesInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput | undefined;
}
