import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberScalarWhereInput } from "../inputs/MovieCrewMemberScalarWhereInput";
import { MovieCrewMemberUpdateManyMutationInput } from "../inputs/MovieCrewMemberUpdateManyMutationInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput",
  {},
)
export class MovieCrewMemberUpdateManyWithWhereWithoutMovieCrewMemberTypeInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberScalarWhereInput, {
    nullable: false,
  })
  where!: MovieCrewMemberScalarWhereInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieCrewMemberUpdateManyMutationInput;
}
