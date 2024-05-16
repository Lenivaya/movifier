import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsCreateWithoutMovieListInput } from "../inputs/MovieListStatsCreateWithoutMovieListInput";
import { MovieListStatsUpdateWithoutMovieListInput } from "../inputs/MovieListStatsUpdateWithoutMovieListInput";
import { MovieListStatsWhereInput } from "../inputs/MovieListStatsWhereInput";

@TypeGraphQL.InputType("MovieListStatsUpsertWithoutMovieListInput", {})
export class MovieListStatsUpsertWithoutMovieListInput {
  @TypeGraphQL.Field((_type) => MovieListStatsUpdateWithoutMovieListInput, {
    nullable: false,
  })
  update!: MovieListStatsUpdateWithoutMovieListInput;

  @TypeGraphQL.Field((_type) => MovieListStatsCreateWithoutMovieListInput, {
    nullable: false,
  })
  create!: MovieListStatsCreateWithoutMovieListInput;

  @TypeGraphQL.Field((_type) => MovieListStatsWhereInput, {
    nullable: true,
  })
  where?: MovieListStatsWhereInput | undefined;
}
