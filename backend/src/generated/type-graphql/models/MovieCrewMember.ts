import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "./Movie";
import { MovieCrewMemberType } from "./MovieCrewMemberType";
import { MovieCrewMemberCount } from "../resolvers/outputs/MovieCrewMemberCount";

@TypeGraphQL.ObjectType("MovieCrewMember", {})
export class MovieCrewMember {
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

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  movies?: Movie[];

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  movieCrewMemberTypeId?: string | null;

  movieCrewMemberType?: MovieCrewMemberType | null;

  @TypeGraphQL.Field((_type) => MovieCrewMemberCount, {
    nullable: true,
  })
  _count?: MovieCrewMemberCount | null;
}
