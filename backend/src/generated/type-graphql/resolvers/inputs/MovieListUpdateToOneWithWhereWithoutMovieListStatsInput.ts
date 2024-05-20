import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutMovieListStatsInput } from "../inputs/MovieListUpdateWithoutMovieListStatsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpdateToOneWithWhereWithoutMovieListStatsInput", {})
export class MovieListUpdateToOneWithWhereWithoutMovieListStatsInput {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutMovieListStatsInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutMovieListStatsInput;
}
