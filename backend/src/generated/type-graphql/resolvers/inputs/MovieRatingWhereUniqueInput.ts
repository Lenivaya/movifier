import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRatingWhereInput } from "../inputs/MovieRatingWhereInput";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { MovieReviewNullableRelationFilter } from "../inputs/MovieReviewNullableRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieRatingWhereUniqueInput", {})
export class MovieRatingWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  movieId?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereInput], {
    nullable: true,
  })
  AND?: MovieRatingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereInput], {
    nullable: true,
  })
  OR?: MovieRatingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingWhereInput], {
    nullable: true,
  })
  NOT?: MovieRatingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewNullableRelationFilter, {
    nullable: true,
  })
  Review?: MovieReviewNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieRelationFilter, {
    nullable: true,
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserRelationFilter, {
    nullable: true,
  })
  user?: MovifierAppUserRelationFilter | undefined;
}
