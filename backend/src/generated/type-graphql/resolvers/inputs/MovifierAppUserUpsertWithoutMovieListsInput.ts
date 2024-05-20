import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsInput";
import { MovifierAppUserUpdateWithoutMovieListsInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutMovieListsInput", {})
export class MovifierAppUserUpsertWithoutMovieListsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutMovieListsInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutMovieListsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListsInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutMovieListsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
