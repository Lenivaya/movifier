import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberListRelationFilter } from "../inputs/MovieCrewMemberListRelationFilter";
import { MovieCrewMemberTypeWhereInput } from "../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.InputType("MovieCrewMemberTypeWhereUniqueInput", {})
export class MovieCrewMemberTypeWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberTypeWhereInput], {
    nullable: true,
  })
  AND?: MovieCrewMemberTypeWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberTypeWhereInput], {
    nullable: true,
  })
  OR?: MovieCrewMemberTypeWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberTypeWhereInput], {
    nullable: true,
  })
  NOT?: MovieCrewMemberTypeWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberListRelationFilter, {
    nullable: true,
  })
  movieCrewMembers?: MovieCrewMemberListRelationFilter | undefined;
}
