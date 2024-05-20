import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutCrewMembersInput } from "../inputs/MovieCreateNestedOneWithoutCrewMembersInput";
import { MovieCrewMemberCreateNestedOneWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateNestedOneWithoutMoviesInput";
import { MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateInput", {})
export class MovieCrewMemberOnMovieCreateInput {
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

  @TypeGraphQL.Field(_type => MovieCrewMemberCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  crewMember!: MovieCrewMemberCreateNestedOneWithoutMoviesInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput, {
    nullable: false
  })
  movieCrewMemberType!: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
}
