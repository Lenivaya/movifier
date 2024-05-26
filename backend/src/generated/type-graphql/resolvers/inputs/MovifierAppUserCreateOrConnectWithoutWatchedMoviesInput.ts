import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutWatchedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput", {})
export class MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutWatchedMoviesInput;
}
