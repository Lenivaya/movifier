import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput", {})
export class MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateWithoutCrewMemberInput, {
    nullable: false
  })
  create!: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput;
}
