import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieCrewMember } from "./MovieCrewMember";
import { MovieCrewMemberTypeCount } from "../resolvers/outputs/MovieCrewMemberTypeCount";

@TypeGraphQL.ObjectType("MovieCrewMemberType", {})
export class MovieCrewMemberType {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  movieCrewMembers?: MovieCrewMember[];

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeCount, {
    nullable: true,
  })
  _count?: MovieCrewMemberTypeCount | null;
}
