import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput", {})
export class MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput, {
    nullable: false
  })
  update!: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput, {
    nullable: false
  })
  create!: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput;
}
