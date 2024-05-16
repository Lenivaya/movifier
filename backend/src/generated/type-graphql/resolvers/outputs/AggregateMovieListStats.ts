import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsAvgAggregate } from "../outputs/MovieListStatsAvgAggregate";
import { MovieListStatsCountAggregate } from "../outputs/MovieListStatsCountAggregate";
import { MovieListStatsMaxAggregate } from "../outputs/MovieListStatsMaxAggregate";
import { MovieListStatsMinAggregate } from "../outputs/MovieListStatsMinAggregate";
import { MovieListStatsSumAggregate } from "../outputs/MovieListStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieListStats", {})
export class AggregateMovieListStats {
  @TypeGraphQL.Field((_type) => MovieListStatsCountAggregate, {
    nullable: true,
  })
  _count!: MovieListStatsCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsAvgAggregate, {
    nullable: true,
  })
  _avg!: MovieListStatsAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsSumAggregate, {
    nullable: true,
  })
  _sum!: MovieListStatsSumAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsMinAggregate, {
    nullable: true,
  })
  _min!: MovieListStatsMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsMaxAggregate, {
    nullable: true,
  })
  _max!: MovieListStatsMaxAggregate | null;
}
