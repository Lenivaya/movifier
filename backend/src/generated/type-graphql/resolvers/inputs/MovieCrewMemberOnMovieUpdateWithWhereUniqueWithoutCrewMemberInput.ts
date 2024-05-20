import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput",
  {},
)
export class MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput,
    {
      nullable: false,
    },
  )
  data!: MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput;
}
