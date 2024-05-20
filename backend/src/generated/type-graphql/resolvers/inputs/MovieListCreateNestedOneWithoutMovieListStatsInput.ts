import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutMovieListStatsInput } from "../inputs/MovieListCreateOrConnectWithoutMovieListStatsInput";
import { MovieListCreateWithoutMovieListStatsInput } from "../inputs/MovieListCreateWithoutMovieListStatsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateNestedOneWithoutMovieListStatsInput", {})
export class MovieListCreateNestedOneWithoutMovieListStatsInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutMovieListStatsInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutMovieListStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutMovieListStatsInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutMovieListStatsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;
}
