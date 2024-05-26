import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutLikedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutLikedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutLikedMoviesInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutLikedMoviesInput;
}
