import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserUpdateWithoutMovieListLikedByUserInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
}
