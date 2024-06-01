import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieAvgAggregate } from "../outputs/MovieCrewMemberOnMovieAvgAggregate";
import { MovieCrewMemberOnMovieCountAggregate } from "../outputs/MovieCrewMemberOnMovieCountAggregate";
import { MovieCrewMemberOnMovieMaxAggregate } from "../outputs/MovieCrewMemberOnMovieMaxAggregate";
import { MovieCrewMemberOnMovieMinAggregate } from "../outputs/MovieCrewMemberOnMovieMinAggregate";
import { MovieCrewMemberOnMovieSumAggregate } from "../outputs/MovieCrewMemberOnMovieSumAggregate";

@TypeGraphQL.ObjectType("MovieCrewMemberOnMovieGroupBy", {})
export class MovieCrewMemberOnMovieGroupBy {
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
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieCrewMemberId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieCrewMemberTypeId!: string;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCountAggregate, {
    nullable: true
  })
  _count!: MovieCrewMemberOnMovieCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieAvgAggregate, {
    nullable: true
  })
  _avg!: MovieCrewMemberOnMovieAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieSumAggregate, {
    nullable: true
  })
  _sum!: MovieCrewMemberOnMovieSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMinAggregate, {
    nullable: true
  })
  _min!: MovieCrewMemberOnMovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieCrewMemberOnMovieMaxAggregate | null;
}
