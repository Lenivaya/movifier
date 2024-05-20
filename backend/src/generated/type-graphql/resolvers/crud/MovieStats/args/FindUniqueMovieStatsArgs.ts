import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsWhereUniqueInput } from "../../../inputs/MovieStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieStatsArgs {
  @TypeGraphQL.Field(_type => MovieStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStatsWhereUniqueInput;
}
