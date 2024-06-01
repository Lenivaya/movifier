import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput } from "../inputs/MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput";

@TypeGraphQL.InputType("MovieCrewMemberCreateInput", {})
export class MovieCrewMemberCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  photoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  popularity?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imdbId!: string;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput, {
    nullable: true
  })
  movies?: MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput | undefined;
}
