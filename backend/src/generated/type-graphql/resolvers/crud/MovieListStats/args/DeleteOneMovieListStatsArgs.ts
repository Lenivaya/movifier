import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsWhereUniqueInput } from "../../../inputs/MovieListStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovieListStatsArgs {
  @TypeGraphQL.Field(_type => MovieListStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListStatsWhereUniqueInput;
}
