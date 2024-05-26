import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutRatedMoviesInput";
import { MovifierAppUserUpdateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutRatedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutRatedMoviesInput", {})
export class MovifierAppUserUpsertWithoutRatedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutRatedMoviesInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutRatedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutRatedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
