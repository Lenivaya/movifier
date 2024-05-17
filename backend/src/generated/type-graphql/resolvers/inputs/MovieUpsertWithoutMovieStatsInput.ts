import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutMovieStatsInput } from "../inputs/MovieCreateWithoutMovieStatsInput";
import { MovieUpdateWithoutMovieStatsInput } from "../inputs/MovieUpdateWithoutMovieStatsInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutMovieStatsInput", {})
export class MovieUpsertWithoutMovieStatsInput {
  @TypeGraphQL.Field((_type) => MovieUpdateWithoutMovieStatsInput, {
    nullable: false,
  })
  update!: MovieUpdateWithoutMovieStatsInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutMovieStatsInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutMovieStatsInput;

  @TypeGraphQL.Field((_type) => MovieWhereInput, {
    nullable: true,
  })
  where?: MovieWhereInput | undefined;
}
