import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { MovieCrewMemberOnMovieListRelationFilter } from "../inputs/MovieCrewMemberOnMovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieCrewMemberWhereInput", {})
export class MovieCrewMemberWhereInput {
  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  AND?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  OR?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberWhereInput], {
    nullable: true
  })
  NOT?: MovieCrewMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  photoUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  popularity?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  imdbId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieCrewMemberOnMovieListRelationFilter | undefined;
}
