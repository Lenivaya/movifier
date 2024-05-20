import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput", {})
export class MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput, {
    nullable: false
  })
  create!: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
}
