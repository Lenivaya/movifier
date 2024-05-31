import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCountAggregate } from "../outputs/MovieWatchedByUserCountAggregate";
import { MovieWatchedByUserMaxAggregate } from "../outputs/MovieWatchedByUserMaxAggregate";
import { MovieWatchedByUserMinAggregate } from "../outputs/MovieWatchedByUserMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieWatchedByUser", {})
export class AggregateMovieWatchedByUser {
  @TypeGraphQL.Field(_type => MovieWatchedByUserCountAggregate, {
    nullable: true
  })
  _count!: MovieWatchedByUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieWatchedByUserMinAggregate, {
    nullable: true
  })
  _min!: MovieWatchedByUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieWatchedByUserMaxAggregate, {
    nullable: true
  })
  _max!: MovieWatchedByUserMaxAggregate | null;
}
