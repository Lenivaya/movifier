import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsUpdateWithoutMovieInput } from "../inputs/MovieStatsUpdateWithoutMovieInput";
import { MovieStatsWhereInput } from "../inputs/MovieStatsWhereInput";

@TypeGraphQL.InputType("MovieStatsUpdateToOneWithWhereWithoutMovieInput", {})
export class MovieStatsUpdateToOneWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieStatsWhereInput, {
    nullable: true
  })
  where?: MovieStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieStatsUpdateWithoutMovieInput;
}
