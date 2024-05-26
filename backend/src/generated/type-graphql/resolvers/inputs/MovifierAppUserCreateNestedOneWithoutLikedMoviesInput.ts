import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutLikedMoviesInput";
import { MovifierAppUserCreateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutLikedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateNestedOneWithoutLikedMoviesInput", {})
export class MovifierAppUserCreateNestedOneWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMoviesInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutLikedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;
}
