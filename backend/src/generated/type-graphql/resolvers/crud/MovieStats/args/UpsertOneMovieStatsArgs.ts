import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsCreateInput } from "../../../inputs/MovieStatsCreateInput";
import { MovieStatsUpdateInput } from "../../../inputs/MovieStatsUpdateInput";
import { MovieStatsWhereUniqueInput } from "../../../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieStatsArgs {
  @TypeGraphQL.Field(_type => MovieStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieStatsCreateInput, {
    nullable: false
  })
  create!: MovieStatsCreateInput;

  @TypeGraphQL.Field(_type => MovieStatsUpdateInput, {
    nullable: false
  })
  update!: MovieStatsUpdateInput;
}
