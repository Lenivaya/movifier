import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsUpdateInput } from "../../../inputs/MovieListStatsUpdateInput";
import { MovieListStatsWhereUniqueInput } from "../../../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => MovieListStatsUpdateInput, {
    nullable: false,
  })
  data!: MovieListStatsUpdateInput;

  @TypeGraphQL.Field((_type) => MovieListStatsWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListStatsWhereUniqueInput;
}
