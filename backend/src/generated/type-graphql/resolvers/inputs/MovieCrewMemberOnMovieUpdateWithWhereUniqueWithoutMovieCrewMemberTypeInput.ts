import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput", {})
export class MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput, {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;
}
