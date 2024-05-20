import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsAvgAggregate } from "../outputs/MovieStatsAvgAggregate";
import { MovieStatsCountAggregate } from "../outputs/MovieStatsCountAggregate";
import { MovieStatsMaxAggregate } from "../outputs/MovieStatsMaxAggregate";
import { MovieStatsMinAggregate } from "../outputs/MovieStatsMinAggregate";
import { MovieStatsSumAggregate } from "../outputs/MovieStatsSumAggregate";

@TypeGraphQL.ObjectType("MovieStatsGroupBy", {})
export class MovieStatsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timesWatchedCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalRatingsCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalLikesCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  overallPlaceINTop!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  avgRating!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

  @TypeGraphQL.Field(_type => MovieStatsCountAggregate, {
    nullable: true
  })
  _count!: MovieStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieStatsAvgAggregate, {
    nullable: true
  })
  _avg!: MovieStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieStatsSumAggregate, {
    nullable: true
  })
  _sum!: MovieStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieStatsMinAggregate, {
    nullable: true
  })
  _min!: MovieStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieStatsMaxAggregate, {
    nullable: true
  })
  _max!: MovieStatsMaxAggregate | null;
}
