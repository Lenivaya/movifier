import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieCrewMemberTypeNullableRelationFilter } from "../inputs/MovieCrewMemberTypeNullableRelationFilter";
import { MovieCrewMemberWhereInput } from "../inputs/MovieCrewMemberWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MovieCrewMemberWhereUniqueInput", {})
export class MovieCrewMemberWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereInput], {
    nullable: true,
  })
  AND?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereInput], {
    nullable: true,
  })
  OR?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCrewMemberWhereInput], {
    nullable: true,
  })
  NOT?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  movieCrewMemberTypeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movies?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeNullableRelationFilter, {
    nullable: true,
  })
  movieCrewMemberType?: MovieCrewMemberTypeNullableRelationFilter | undefined;
}
