import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberAvgAggregate } from "../outputs/MovieCrewMemberAvgAggregate";
import { MovieCrewMemberCountAggregate } from "../outputs/MovieCrewMemberCountAggregate";
import { MovieCrewMemberMaxAggregate } from "../outputs/MovieCrewMemberMaxAggregate";
import { MovieCrewMemberMinAggregate } from "../outputs/MovieCrewMemberMinAggregate";
import { MovieCrewMemberSumAggregate } from "../outputs/MovieCrewMemberSumAggregate";

@TypeGraphQL.ObjectType("MovieCrewMemberGroupBy", {})
export class MovieCrewMemberGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  photoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  popularity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imdbId!: string;

  @TypeGraphQL.Field(_type => MovieCrewMemberCountAggregate, {
    nullable: true
  })
  _count!: MovieCrewMemberCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberAvgAggregate, {
    nullable: true
  })
  _avg!: MovieCrewMemberAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberSumAggregate, {
    nullable: true
  })
  _sum!: MovieCrewMemberSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberMinAggregate, {
    nullable: true
  })
  _min!: MovieCrewMemberMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieCrewMemberMaxAggregate, {
    nullable: true
  })
  _max!: MovieCrewMemberMaxAggregate | null;
}
