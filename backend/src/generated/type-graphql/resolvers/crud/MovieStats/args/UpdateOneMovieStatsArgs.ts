import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsUpdateInput } from "../../../inputs/MovieStatsUpdateInput";
import { MovieStatsWhereUniqueInput } from "../../../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieStatsArgs {
  @TypeGraphQL.Field((_type) => MovieStatsUpdateInput, {
    nullable: false,
  })
  data!: MovieStatsUpdateInput;

  @TypeGraphQL.Field((_type) => MovieStatsWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieStatsWhereUniqueInput;
}
