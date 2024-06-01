import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MovieCrewMemberOnMovieMaxAggregate", {})
export class MovieCrewMemberOnMovieMaxAggregate {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  movieId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  movieCrewMemberId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  movieCrewMemberTypeId!: string | null;
}
