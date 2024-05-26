import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutLikedMoviesInput";
import { MovifierAppUserUpdateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutLikedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutLikedMoviesInput", {})
export class MovifierAppUserUpsertWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutLikedMoviesInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutLikedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMoviesInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutLikedMoviesInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
