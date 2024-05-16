import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCountAggregate } from "../outputs/MovieCrewMemberCountAggregate";
import { MovieCrewMemberMaxAggregate } from "../outputs/MovieCrewMemberMaxAggregate";
import { MovieCrewMemberMinAggregate } from "../outputs/MovieCrewMemberMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieCrewMember", {})
export class AggregateMovieCrewMember {
  @TypeGraphQL.Field((_type) => MovieCrewMemberCountAggregate, {
    nullable: true,
  })
  _count!: MovieCrewMemberCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieCrewMemberMinAggregate, {
    nullable: true,
  })
  _min!: MovieCrewMemberMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieCrewMemberMaxAggregate, {
    nullable: true,
  })
  _max!: MovieCrewMemberMaxAggregate | null;
}
