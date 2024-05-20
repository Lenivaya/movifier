import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutMovieStatsInput } from "../inputs/MovieUpdateWithoutMovieStatsInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutMovieStatsInput", {})
export class MovieUpdateToOneWithWhereWithoutMovieStatsInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutMovieStatsInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutMovieStatsInput;
}
