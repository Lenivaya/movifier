import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListStatsInput } from "../inputs/MovieListCreateWithoutMovieListStatsInput";
import { MovieListUpdateWithoutMovieListStatsInput } from "../inputs/MovieListUpdateWithoutMovieListStatsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpsertWithoutMovieListStatsInput", {})
export class MovieListUpsertWithoutMovieListStatsInput {
  @TypeGraphQL.Field((_type) => MovieListUpdateWithoutMovieListStatsInput, {
    nullable: false,
  })
  update!: MovieListUpdateWithoutMovieListStatsInput;

  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMovieListStatsInput, {
    nullable: false,
  })
  create!: MovieListCreateWithoutMovieListStatsInput;

  @TypeGraphQL.Field((_type) => MovieListWhereInput, {
    nullable: true,
  })
  where?: MovieListWhereInput | undefined;
}
