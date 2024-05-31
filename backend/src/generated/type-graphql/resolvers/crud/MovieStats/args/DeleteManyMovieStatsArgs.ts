import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsWhereInput } from "../../../inputs/MovieStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieStatsArgs {
  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  where?: MovieStatsWhereInput | undefined;
}
