import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsCommentsInput";
import { MovifierAppUserUpdateWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListsCommentsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutMovieListsCommentsInput", {})
export class MovifierAppUserUpsertWithoutMovieListsCommentsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutMovieListsCommentsInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutMovieListsCommentsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListsCommentsInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutMovieListsCommentsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
