import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCountAggregate } from "../outputs/MovieCrewMemberOnMovieCountAggregate";
import { MovieCrewMemberOnMovieMaxAggregate } from "../outputs/MovieCrewMemberOnMovieMaxAggregate";
import { MovieCrewMemberOnMovieMinAggregate } from "../outputs/MovieCrewMemberOnMovieMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieCrewMemberOnMovie", {})
export class AggregateMovieCrewMemberOnMovie {
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
