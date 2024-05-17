import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutMovieStatsInput } from "../inputs/MovieCreateNestedOneWithoutMovieStatsInput";

@TypeGraphQL.InputType("MovieStatsCreateInput", {})
export class MovieStatsCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  timesWatchedCount!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  totalRatingsCount!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  totalLikesCount!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  overallPlaceINTop!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  avgRating!: number;

  @TypeGraphQL.Field((_type) => MovieCreateNestedOneWithoutMovieStatsInput, {
    nullable: false,
  })
  movie!: MovieCreateNestedOneWithoutMovieStatsInput;
}
