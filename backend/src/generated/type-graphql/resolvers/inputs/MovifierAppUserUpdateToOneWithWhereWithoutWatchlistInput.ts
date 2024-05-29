import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutWatchlistInput } from "../inputs/MovifierAppUserUpdateWithoutWatchlistInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchlistInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutWatchlistInput;
}
