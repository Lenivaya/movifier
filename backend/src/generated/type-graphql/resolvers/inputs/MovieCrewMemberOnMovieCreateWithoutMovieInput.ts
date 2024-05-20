import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateNestedOneWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateNestedOneWithoutMoviesInput";
import { MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateWithoutMovieInput", {})
export class MovieCrewMemberOnMovieCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  crewMember!: MovieCrewMemberCreateNestedOneWithoutMoviesInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput, {
    nullable: false
  })
  movieCrewMemberType!: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
}
