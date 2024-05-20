import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput",
  {},
)
export class MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieCreateWithoutMovieInput, {
    nullable: false,
  })
  create!: MovieCrewMemberOnMovieCreateWithoutMovieInput;
}
