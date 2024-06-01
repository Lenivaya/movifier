import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieCrewMemberOnMovie } from "../models/MovieCrewMemberOnMovie";
import { MovieCrewMemberCount } from "../resolvers/outputs/MovieCrewMemberCount";

@TypeGraphQL.ObjectType("MovieCrewMember", {})
export class MovieCrewMember {
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

  movies?: MovieCrewMemberOnMovie[];

  @TypeGraphQL.Field(_type => MovieCrewMemberCount, {
    nullable: true
  })
  _count?: MovieCrewMemberCount | null;
}
