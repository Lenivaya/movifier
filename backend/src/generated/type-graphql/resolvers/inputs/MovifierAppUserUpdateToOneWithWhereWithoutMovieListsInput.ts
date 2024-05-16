import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutMovieListsInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType(
  "MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput",
  {},
)
export class MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserUpdateWithoutMovieListsInput, {
    nullable: false,
  })
  data!: MovifierAppUserUpdateWithoutMovieListsInput;
}
