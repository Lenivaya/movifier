import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovifierAppUserCreateOrConnectWithoutMovieListsInput",
  {},
)
export class MovifierAppUserCreateOrConnectWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: false,
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserCreateWithoutMovieListsInput, {
    nullable: false,
  })
  create!: MovifierAppUserCreateWithoutMovieListsInput;
}
