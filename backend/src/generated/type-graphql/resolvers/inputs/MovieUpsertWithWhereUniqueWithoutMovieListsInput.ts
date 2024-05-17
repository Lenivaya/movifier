import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieListsInput } from "../inputs/MovieCreateWithoutMovieListsInput";
import { MovieUpdateWithoutMovieListsInput } from "../inputs/MovieUpdateWithoutMovieListsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpsertWithWhereUniqueWithoutMovieListsInput", {})
export class MovieUpsertWithWhereUniqueWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieUpdateWithoutMovieListsInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutMovieListsInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieListsInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieListsInput;
}
