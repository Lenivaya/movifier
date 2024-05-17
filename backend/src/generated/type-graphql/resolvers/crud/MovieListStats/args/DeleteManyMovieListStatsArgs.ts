import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsWhereInput } from "../../../inputs/MovieListStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => MovieListStatsWhereInput, {
    nullable: true,
  })
  where?: MovieListStatsWhereInput | undefined;
}
