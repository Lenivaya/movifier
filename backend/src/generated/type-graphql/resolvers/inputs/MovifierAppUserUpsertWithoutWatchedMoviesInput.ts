import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutWatchedMoviesInput";
import { MovifierAppUserUpdateWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutWatchedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutWatchedMoviesInput", {})
export class MovifierAppUserUpsertWithoutWatchedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutWatchedMoviesInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutWatchedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutWatchedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
