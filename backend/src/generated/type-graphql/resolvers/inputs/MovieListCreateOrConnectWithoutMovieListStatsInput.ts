import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListStatsInput } from "../inputs/MovieListCreateWithoutMovieListStatsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateOrConnectWithoutMovieListStatsInput", {})
export class MovieListCreateOrConnectWithoutMovieListStatsInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutMovieListStatsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutMovieListStatsInput;
}
