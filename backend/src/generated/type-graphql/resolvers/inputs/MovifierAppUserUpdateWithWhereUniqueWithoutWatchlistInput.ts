import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateWithoutWatchlistInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput", {})
export class MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchlistInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutWatchlistInput;
}
