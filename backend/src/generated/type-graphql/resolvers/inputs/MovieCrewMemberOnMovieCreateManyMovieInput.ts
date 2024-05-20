import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateManyMovieInput", {})
export class MovieCrewMemberOnMovieCreateManyMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieCrewMemberId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieCrewMemberTypeId!: string;
}
