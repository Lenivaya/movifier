import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsCreateInput } from "../../../inputs/MovieStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieStatsArgs {
  @TypeGraphQL.Field(_type => MovieStatsCreateInput, {
    nullable: false
  })
  data!: MovieStatsCreateInput;
}
