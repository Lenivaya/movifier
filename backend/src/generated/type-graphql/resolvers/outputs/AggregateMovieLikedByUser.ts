import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCountAggregate } from "../outputs/MovieLikedByUserCountAggregate";
import { MovieLikedByUserMaxAggregate } from "../outputs/MovieLikedByUserMaxAggregate";
import { MovieLikedByUserMinAggregate } from "../outputs/MovieLikedByUserMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieLikedByUser", {})
export class AggregateMovieLikedByUser {
  @TypeGraphQL.Field(_type => MovieLikedByUserCountAggregate, {
    nullable: true
  })
  _count!: MovieLikedByUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikedByUserMinAggregate, {
    nullable: true
  })
  _min!: MovieLikedByUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikedByUserMaxAggregate, {
    nullable: true
  })
  _max!: MovieLikedByUserMaxAggregate | null;
}
