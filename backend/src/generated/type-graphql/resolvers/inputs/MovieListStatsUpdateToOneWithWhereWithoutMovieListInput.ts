import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsUpdateWithoutMovieListInput } from "../inputs/MovieListStatsUpdateWithoutMovieListInput";
import { MovieListStatsWhereInput } from "../inputs/MovieListStatsWhereInput";

@TypeGraphQL.InputType(
  "MovieListStatsUpdateToOneWithWhereWithoutMovieListInput",
  {},
)
export class MovieListStatsUpdateToOneWithWhereWithoutMovieListInput {
  @TypeGraphQL.Field((_type) => MovieListStatsWhereInput, {
    nullable: true,
  })
  where?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListStatsUpdateWithoutMovieListInput, {
    nullable: false,
  })
  data!: MovieListStatsUpdateWithoutMovieListInput;
}
