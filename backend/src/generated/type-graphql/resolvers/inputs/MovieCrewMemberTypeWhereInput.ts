import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberListRelationFilter } from "../inputs/MovieCrewMemberListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieCrewMemberTypeWhereInput", {})
export class MovieCrewMemberTypeWhereInput {
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

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberListRelationFilter, {
    nullable: true,
  })
  movieCrewMembers?: MovieCrewMemberListRelationFilter | undefined;
}
