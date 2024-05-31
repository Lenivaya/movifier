import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListStatsCreateOrConnectWithoutMovieListInput";
import { MovieListStatsCreateWithoutMovieListInput } from "../inputs/MovieListStatsCreateWithoutMovieListInput";
import { MovieListStatsUpdateToOneWithWhereWithoutMovieListInput } from "../inputs/MovieListStatsUpdateToOneWithWhereWithoutMovieListInput";
import { MovieListStatsUpsertWithoutMovieListInput } from "../inputs/MovieListStatsUpsertWithoutMovieListInput";
import { MovieListStatsWhereInput } from "../inputs/MovieListStatsWhereInput";
import { MovieListStatsWhereUniqueInput } from "../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.InputType("MovieListStatsUpdateOneWithoutMovieListNestedInput", {})
export class MovieListStatsUpdateOneWithoutMovieListNestedInput {
  @TypeGraphQL.Field(_type => MovieListStatsCreateWithoutMovieListInput, {
    nullable: true
  })
  create?: MovieListStatsCreateWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsCreateOrConnectWithoutMovieListInput, {
    nullable: true
  })
  connectOrCreate?: MovieListStatsCreateOrConnectWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsUpsertWithoutMovieListInput, {
    nullable: true
  })
  upsert?: MovieListStatsUpsertWithoutMovieListInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  disconnect?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  delete?: MovieListStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsUpdateToOneWithWhereWithoutMovieListInput, {
    nullable: true
  })
  update?: MovieListStatsUpdateToOneWithWhereWithoutMovieListInput | undefined;
}
