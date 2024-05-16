import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput,
    {
      nullable: false,
    },
  )
  update!: MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput,
    {
      nullable: false,
    },
  )
  create!: MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput;
}
