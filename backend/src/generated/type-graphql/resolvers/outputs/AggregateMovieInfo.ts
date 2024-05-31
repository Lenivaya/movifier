import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoAvgAggregate } from "../outputs/MovieInfoAvgAggregate";
import { MovieInfoCountAggregate } from "../outputs/MovieInfoCountAggregate";
import { MovieInfoMaxAggregate } from "../outputs/MovieInfoMaxAggregate";
import { MovieInfoMinAggregate } from "../outputs/MovieInfoMinAggregate";
import { MovieInfoSumAggregate } from "../outputs/MovieInfoSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieInfo", {})
export class AggregateMovieInfo {
  @TypeGraphQL.Field(_type => MovieInfoCountAggregate, {
    nullable: true
  })
  _count!: MovieInfoCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieInfoAvgAggregate, {
    nullable: true
  })
  _avg!: MovieInfoAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieInfoSumAggregate, {
    nullable: true
  })
  _sum!: MovieInfoSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieInfoMinAggregate, {
    nullable: true
  })
  _min!: MovieInfoMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieInfoMaxAggregate, {
    nullable: true
  })
  _max!: MovieInfoMaxAggregate | null;
}
