import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsCreateInput } from "../../../inputs/MovieListStatsCreateInput";
import { MovieListStatsUpdateInput } from "../../../inputs/MovieListStatsUpdateInput";
import { MovieListStatsWhereUniqueInput } from "../../../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => MovieListStatsWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListStatsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListStatsCreateInput, {
    nullable: false,
  })
  create!: MovieListStatsCreateInput;

  @TypeGraphQL.Field((_type) => MovieListStatsUpdateInput, {
    nullable: false,
  })
  update!: MovieListStatsUpdateInput;
}
