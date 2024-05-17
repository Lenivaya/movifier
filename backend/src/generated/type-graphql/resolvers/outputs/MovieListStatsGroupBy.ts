import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsAvgAggregate } from "../outputs/MovieListStatsAvgAggregate";
import { MovieListStatsCountAggregate } from "../outputs/MovieListStatsCountAggregate";
import { MovieListStatsMaxAggregate } from "../outputs/MovieListStatsMaxAggregate";
import { MovieListStatsMinAggregate } from "../outputs/MovieListStatsMinAggregate";
import { MovieListStatsSumAggregate } from "../outputs/MovieListStatsSumAggregate";

@TypeGraphQL.ObjectType("MovieListStatsGroupBy", {})
export class MovieListStatsGroupBy {
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

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  views!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  likes!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieListId!: string;

  @TypeGraphQL.Field((_type) => MovieListStatsCountAggregate, {
    nullable: true,
  })
  _count!: MovieListStatsCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsAvgAggregate, {
    nullable: true,
  })
  _avg!: MovieListStatsAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsSumAggregate, {
    nullable: true,
  })
  _sum!: MovieListStatsSumAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsMinAggregate, {
    nullable: true,
  })
  _min!: MovieListStatsMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListStatsMaxAggregate, {
    nullable: true,
  })
  _max!: MovieListStatsMaxAggregate | null;
}
