import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStatsCreateManyInput } from "../../../inputs/MovieStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieStatsArgs {
  @TypeGraphQL.Field((_type) => [MovieStatsCreateManyInput], {
    nullable: false,
  })
  data!: MovieStatsCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
