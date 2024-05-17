import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutStudiosInput } from "../inputs/MovieCreateWithoutStudiosInput";
import { MovieUpdateWithoutStudiosInput } from "../inputs/MovieUpdateWithoutStudiosInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpsertWithWhereUniqueWithoutStudiosInput", {})
export class MovieUpsertWithWhereUniqueWithoutStudiosInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutStudiosInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutStudiosInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutStudiosInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutStudiosInput;
}
