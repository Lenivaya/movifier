import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsAvgAggregate } from "../outputs/MovieStatsAvgAggregate";
import { MovieStatsCountAggregate } from "../outputs/MovieStatsCountAggregate";
import { MovieStatsMaxAggregate } from "../outputs/MovieStatsMaxAggregate";
import { MovieStatsMinAggregate } from "../outputs/MovieStatsMinAggregate";
import { MovieStatsSumAggregate } from "../outputs/MovieStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieStats", {})
export class AggregateMovieStats {
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
