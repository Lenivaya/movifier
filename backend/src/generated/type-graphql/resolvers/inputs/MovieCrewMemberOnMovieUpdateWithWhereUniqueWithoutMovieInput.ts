import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieUpdateWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithoutMovieInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput", {})
export class MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
}
