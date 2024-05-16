import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberCreateOrConnectWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput,
    {
      nullable: false,
    },
  )
  create!: MovieCrewMemberCreateWithoutMovieCrewMemberTypeInput;
}
