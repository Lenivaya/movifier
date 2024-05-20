import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput",
  {},
)
export class MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput {
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
