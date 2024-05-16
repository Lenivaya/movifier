import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutRatingInput } from "../inputs/MovifierAppUserUpdateWithoutRatingInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType(
  "MovifierAppUserUpdateToOneWithWhereWithoutRatingInput",
  {},
)
export class MovifierAppUserUpdateToOneWithWhereWithoutRatingInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserUpdateWithoutRatingInput, {
    nullable: false,
  })
  data!: MovifierAppUserUpdateWithoutRatingInput;
}
