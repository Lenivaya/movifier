import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateNestedOneWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutWatchlistInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateWithoutMovieInput", {})
export class UserMovieWatchlistCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutWatchlistInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
}
