import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { MovieCrewMember } from "../models/MovieCrewMember";
import { MovieCrewMemberType } from "../models/MovieCrewMemberType";

@TypeGraphQL.ObjectType("MovieCrewMemberOnMovie", {})
export class MovieCrewMemberOnMovie {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  movie?: Movie;

  crewMember?: MovieCrewMember;

  movieCrewMemberType?: MovieCrewMemberType;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieCrewMemberId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieCrewMemberTypeId!: string;
}
