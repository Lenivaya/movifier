import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateWithoutMoviesInput";
import { MovieCrewMemberUpdateWithoutMoviesInput } from "../inputs/MovieCrewMemberUpdateWithoutMoviesInput";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberUpsertWithoutMoviesInput", {})
export class MovieCrewMemberUpsertWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: MovieCrewMemberUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieCrewMemberCreateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberWhereInput | undefined;
}
