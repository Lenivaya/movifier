import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieUpdateWithoutGenresInput } from "../inputs/MovieUpdateWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpsertWithWhereUniqueWithoutGenresInput", {})
export class MovieUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutGenresInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutGenresInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutGenresInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutGenresInput;
}
