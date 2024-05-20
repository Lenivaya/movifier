import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutCrewMembersInput } from "../inputs/MovieCreateNestedOneWithoutCrewMembersInput";
import { MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateWithoutCrewMemberInput", {})
export class MovieCrewMemberOnMovieCreateWithoutCrewMemberInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutCrewMembersInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutCrewMembersInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput, {
    nullable: false
  })
  movieCrewMemberType!: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
}
