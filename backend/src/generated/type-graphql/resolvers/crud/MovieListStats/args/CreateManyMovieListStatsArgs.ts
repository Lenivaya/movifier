import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListStatsCreateManyInput } from "../../../inputs/MovieListStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieListStatsArgs {
  @TypeGraphQL.Field((_type) => [MovieListStatsCreateManyInput], {
    nullable: false,
  })
  data!: MovieListStatsCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
