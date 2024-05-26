import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutLikedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutLikedMoviesInput", {})
export class MovifierAppUserCreateOrConnectWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutLikedMoviesInput;
}
