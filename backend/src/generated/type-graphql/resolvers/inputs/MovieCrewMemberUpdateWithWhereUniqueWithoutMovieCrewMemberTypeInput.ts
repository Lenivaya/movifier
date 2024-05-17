import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput {
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
  data!: MovieCrewMemberUpdateWithoutMovieCrewMemberTypeInput;
}
