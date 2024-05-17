import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCountAggregate } from "../outputs/MovieReviewCountAggregate";
import { MovieReviewMaxAggregate } from "../outputs/MovieReviewMaxAggregate";
import { MovieReviewMinAggregate } from "../outputs/MovieReviewMinAggregate";

@TypeGraphQL.ObjectType("MovieReviewGroupBy", {})
export class MovieReviewGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ratingId!: string;

  @TypeGraphQL.Field((_type) => MovieReviewCountAggregate, {
    nullable: true,
  })
  _count!: MovieReviewCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieReviewMinAggregate, {
    nullable: true,
  })
  _min!: MovieReviewMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieReviewMaxAggregate, {
    nullable: true,
  })
  _max!: MovieReviewMaxAggregate | null;
}
