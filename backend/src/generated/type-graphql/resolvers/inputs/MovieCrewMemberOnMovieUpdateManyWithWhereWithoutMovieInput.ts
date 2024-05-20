import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieScalarWhereInput } from "../inputs/MovieCrewMemberOnMovieScalarWhereInput";
import { MovieCrewMemberOnMovieUpdateManyMutationInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput",
  {},
)
export class MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieScalarWhereInput, {
    nullable: false,
  })
  where!: MovieCrewMemberOnMovieScalarWhereInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieCrewMemberOnMovieUpdateManyMutationInput;
}
