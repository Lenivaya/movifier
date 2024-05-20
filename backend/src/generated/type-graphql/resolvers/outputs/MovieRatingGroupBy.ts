import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingAvgAggregate } from "../outputs/MovieRatingAvgAggregate";
import { MovieRatingCountAggregate } from "../outputs/MovieRatingCountAggregate";
import { MovieRatingMaxAggregate } from "../outputs/MovieRatingMaxAggregate";
import { MovieRatingMinAggregate } from "../outputs/MovieRatingMinAggregate";
import { MovieRatingSumAggregate } from "../outputs/MovieRatingSumAggregate";

@TypeGraphQL.ObjectType("MovieRatingGroupBy", {})
export class MovieRatingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => MovieRatingCountAggregate, {
    nullable: true
  })
  _count!: MovieRatingCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieRatingAvgAggregate, {
    nullable: true
  })
  _avg!: MovieRatingAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieRatingSumAggregate, {
    nullable: true
  })
  _sum!: MovieRatingSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieRatingMinAggregate, {
    nullable: true
  })
  _min!: MovieRatingMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieRatingMaxAggregate, {
    nullable: true
  })
  _max!: MovieRatingMaxAggregate | null;
}
