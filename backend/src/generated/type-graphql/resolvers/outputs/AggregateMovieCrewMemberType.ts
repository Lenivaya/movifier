import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCountAggregate } from "../outputs/MovieCrewMemberTypeCountAggregate";
import { MovieCrewMemberTypeMaxAggregate } from "../outputs/MovieCrewMemberTypeMaxAggregate";
import { MovieCrewMemberTypeMinAggregate } from "../outputs/MovieCrewMemberTypeMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieCrewMemberType", {})
export class AggregateMovieCrewMemberType {
  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeCountAggregate, {
    nullable: true,
  })
  _count!: MovieCrewMemberTypeCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeMinAggregate, {
    nullable: true,
  })
  _min!: MovieCrewMemberTypeMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeMaxAggregate, {
    nullable: true,
  })
  _max!: MovieCrewMemberTypeMaxAggregate | null;
}
