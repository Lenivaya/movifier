import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingAvgAggregate } from "../outputs/MovieRatingAvgAggregate";
import { MovieRatingCountAggregate } from "../outputs/MovieRatingCountAggregate";
import { MovieRatingMaxAggregate } from "../outputs/MovieRatingMaxAggregate";
import { MovieRatingMinAggregate } from "../outputs/MovieRatingMinAggregate";
import { MovieRatingSumAggregate } from "../outputs/MovieRatingSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieRating", {})
export class AggregateMovieRating {
  @TypeGraphQL.Field((_type) => MovieRatingCountAggregate, {
    nullable: true,
  })
  _count!: MovieRatingCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieRatingAvgAggregate, {
    nullable: true,
  })
  _avg!: MovieRatingAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MovieRatingSumAggregate, {
    nullable: true,
  })
  _sum!: MovieRatingSumAggregate | null;

  @TypeGraphQL.Field((_type) => MovieRatingMinAggregate, {
    nullable: true,
  })
  _min!: MovieRatingMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieRatingMaxAggregate, {
    nullable: true,
  })
  _max!: MovieRatingMaxAggregate | null;
}
