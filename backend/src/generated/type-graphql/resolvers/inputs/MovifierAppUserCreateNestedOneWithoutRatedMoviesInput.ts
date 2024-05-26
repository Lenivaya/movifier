import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutRatedMoviesInput";
import { MovifierAppUserCreateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutRatedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateNestedOneWithoutRatedMoviesInput", {})
export class MovifierAppUserCreateNestedOneWithoutRatedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatedMoviesInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutRatedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutRatedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;
}
