import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutRatingInput } from "../inputs/MovifierAppUserCreateWithoutRatingInput";
import { MovifierAppUserUpdateWithoutRatingInput } from "../inputs/MovifierAppUserUpdateWithoutRatingInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutRatingInput", {})
export class MovifierAppUserUpsertWithoutRatingInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutRatingInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutRatingInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutRatingInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutRatingInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
