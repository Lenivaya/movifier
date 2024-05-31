import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsCreateWithoutMovieListInput } from "../inputs/MovieListStatsCreateWithoutMovieListInput";
import { MovieListStatsWhereUniqueInput } from "../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieListStatsCreateOrConnectWithoutMovieListInput", {})
export class MovieListStatsCreateOrConnectWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListStatsCreateWithoutMovieListInput, {
    nullable: false
  })
  create!: MovieListStatsCreateWithoutMovieListInput;
}
