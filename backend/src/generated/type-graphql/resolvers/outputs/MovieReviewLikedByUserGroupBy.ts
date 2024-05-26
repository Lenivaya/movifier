import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCountAggregate } from "../outputs/MovieReviewLikedByUserCountAggregate";
import { MovieReviewLikedByUserMaxAggregate } from "../outputs/MovieReviewLikedByUserMaxAggregate";
import { MovieReviewLikedByUserMinAggregate } from "../outputs/MovieReviewLikedByUserMinAggregate";

@TypeGraphQL.ObjectType("MovieReviewLikedByUserGroupBy", {})
export class MovieReviewLikedByUserGroupBy {
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
  movieReviewId!: string;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCountAggregate, {
    nullable: true
  })
  _count!: MovieReviewLikedByUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserMinAggregate, {
    nullable: true
  })
  _min!: MovieReviewLikedByUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserMaxAggregate, {
    nullable: true
  })
  _max!: MovieReviewLikedByUserMaxAggregate | null;
}
