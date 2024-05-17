import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieInfoWhereInput } from "../inputs/MovieInfoWhereInput";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("MovieInfoWhereUniqueInput", {})
export class MovieInfoWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  imdbId?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  movieId?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoWhereInput], {
    nullable: true,
  })
  AND?: MovieInfoWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoWhereInput], {
    nullable: true,
  })
  OR?: MovieInfoWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieInfoWhereInput], {
    nullable: true,
  })
  NOT?: MovieInfoWhereInput[] | undefined;

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
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, {
    nullable: true,
  })
  alternativeTitles?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  durationInMinutes?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  posterUrl?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieRelationFilter, {
    nullable: true,
  })
  movie?: MovieRelationFilter | undefined;
}
