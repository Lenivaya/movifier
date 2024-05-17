import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateWithoutMoviesInput";
import { MovieCrewMemberUpdateWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateWithoutMoviesInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput",
  {},
)
export class MovieCrewMemberUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: MovieCrewMemberUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieCrewMemberCreateWithoutMoviesInput;
}
