import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCountAggregate } from "../outputs/MovieLikedByUserCountAggregate";
import { MovieLikedByUserMaxAggregate } from "../outputs/MovieLikedByUserMaxAggregate";
import { MovieLikedByUserMinAggregate } from "../outputs/MovieLikedByUserMinAggregate";

@TypeGraphQL.ObjectType("MovieLikedByUserGroupBy", {})
export class MovieLikedByUserGroupBy {
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
