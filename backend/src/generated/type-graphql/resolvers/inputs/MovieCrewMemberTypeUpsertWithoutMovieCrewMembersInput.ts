import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeWhereInput } from "../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput", {})
export class MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput, {
    nullable: false
  })
  update!: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput, {
    nullable: false
  })
  create!: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;
}
