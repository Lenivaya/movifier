import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsUpdateManyMutationInput } from "../../../inputs/MovieListStatsUpdateManyMutationInput";
import { MovieListStatsWhereInput } from "../../../inputs/MovieListStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieListStatsArgs {
  @TypeGraphQL.Field(_type => MovieListStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieListStatsWhereInput, {
    nullable: true
  })
  where?: MovieListStatsWhereInput | undefined;
}
