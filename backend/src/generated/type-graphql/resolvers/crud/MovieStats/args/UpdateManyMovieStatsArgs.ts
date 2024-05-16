import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsUpdateManyMutationInput } from "../../../inputs/MovieStatsUpdateManyMutationInput";
import { MovieStatsWhereInput } from "../../../inputs/MovieStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieStatsArgs {
  @TypeGraphQL.Field((_type) => MovieStatsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieStatsUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MovieStatsWhereInput, {
    nullable: true,
  })
  where?: MovieStatsWhereInput | undefined;
}
