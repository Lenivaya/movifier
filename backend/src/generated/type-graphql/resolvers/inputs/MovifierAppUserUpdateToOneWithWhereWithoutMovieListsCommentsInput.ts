import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListsCommentsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType(
  "MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput",
  {},
)
export class MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserUpdateWithoutMovieListsCommentsInput,
    {
      nullable: false,
    },
  )
  data!: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
}
