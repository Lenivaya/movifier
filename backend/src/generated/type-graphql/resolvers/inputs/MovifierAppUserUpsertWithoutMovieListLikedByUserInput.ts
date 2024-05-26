import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateWithoutMovieListLikedByUserInput";
import { MovifierAppUserUpdateWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListLikedByUserInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutMovieListLikedByUserInput", {})
export class MovifierAppUserUpsertWithoutMovieListLikedByUserInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutMovieListLikedByUserInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
