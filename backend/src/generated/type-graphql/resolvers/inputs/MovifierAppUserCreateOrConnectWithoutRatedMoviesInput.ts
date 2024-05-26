import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutRatedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutRatedMoviesInput", {})
export class MovifierAppUserCreateOrConnectWithoutRatedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutRatedMoviesInput;
}
