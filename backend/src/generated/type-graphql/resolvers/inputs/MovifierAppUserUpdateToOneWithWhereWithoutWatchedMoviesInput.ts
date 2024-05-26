import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutWatchedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchedMoviesInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutWatchedMoviesInput;
}
