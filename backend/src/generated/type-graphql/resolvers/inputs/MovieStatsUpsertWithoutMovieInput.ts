import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsCreateWithoutMovieInput } from "../inputs/MovieStatsCreateWithoutMovieInput";
import { MovieStatsUpdateWithoutMovieInput } from "../inputs/MovieStatsUpdateWithoutMovieInput";
import { MovieStatsWhereInput } from "../inputs/MovieStatsWhereInput";

@TypeGraphQL.InputType("MovieStatsUpsertWithoutMovieInput", {})
export class MovieStatsUpsertWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieStatsUpdateWithoutMovieInput, {
    nullable: false,
  })
  update!: MovieStatsUpdateWithoutMovieInput;

  @TypeGraphQL.Field((_type) => MovieStatsCreateWithoutMovieInput, {
    nullable: false,
  })
  create!: MovieStatsCreateWithoutMovieInput;

  @TypeGraphQL.Field((_type) => MovieStatsWhereInput, {
    nullable: true,
  })
  where?: MovieStatsWhereInput | undefined;
}
