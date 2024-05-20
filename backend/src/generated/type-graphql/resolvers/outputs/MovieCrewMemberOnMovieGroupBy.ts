import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCountAggregate } from "../outputs/MovieCrewMemberOnMovieCountAggregate";
import { MovieCrewMemberOnMovieMaxAggregate } from "../outputs/MovieCrewMemberOnMovieMaxAggregate";
import { MovieCrewMemberOnMovieMinAggregate } from "../outputs/MovieCrewMemberOnMovieMinAggregate";

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

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMinAggregate, {
    nullable: true
  })
  _min!: MovieCrewMemberOnMovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieCrewMemberOnMovieMaxAggregate | null;
}
