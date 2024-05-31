import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutRatedMoviesInput } from "../inputs/MovifierAppUserUpdateWithoutRatedMoviesInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutRatedMoviesInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutRatedMoviesInput;
}
