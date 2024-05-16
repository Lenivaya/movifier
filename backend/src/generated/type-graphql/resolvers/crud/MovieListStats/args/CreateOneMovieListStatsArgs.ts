import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsCreateInput } from "../../../inputs/MovieListStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => MovieListStatsCreateInput, {
    nullable: false,
  })
  data!: MovieListStatsCreateInput;
}
