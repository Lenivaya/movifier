import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCountAggregate } from "../outputs/MovieWatchedByUserCountAggregate";
import { MovieWatchedByUserMaxAggregate } from "../outputs/MovieWatchedByUserMaxAggregate";
import { MovieWatchedByUserMinAggregate } from "../outputs/MovieWatchedByUserMinAggregate";

@TypeGraphQL.ObjectType("MovieWatchedByUserGroupBy", {})
export class MovieWatchedByUserGroupBy {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

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
