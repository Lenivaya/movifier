import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput } from "../inputs/MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput";
import { MovieCrewMemberTypeWhereInput } from "../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput", {})
export class MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput, {
    nullable: false
  })
  data!: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
}
