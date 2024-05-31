import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListStatsCreateOrConnectWithoutMovieListInput";
import { MovieListStatsCreateWithoutMovieListInput } from "../inputs/MovieListStatsCreateWithoutMovieListInput";
import { MovieListStatsWhereUniqueInput } from "../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieListStatsCreateNestedOneWithoutMovieListInput", {})
export class MovieListStatsCreateNestedOneWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListStatsCreateWithoutMovieListInput, {
    nullable: true
  })
  create?: MovieListStatsCreateWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsCreateOrConnectWithoutMovieListInput, {
    nullable: true
  })
  connectOrCreate?: MovieListStatsCreateOrConnectWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListStatsWhereUniqueInput | undefined;
}
