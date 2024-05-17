import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberUpdateWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateWithoutMoviesInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput",
  {},
)
export class MovieCrewMemberUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: MovieCrewMemberUpdateWithoutMoviesInput;
}
