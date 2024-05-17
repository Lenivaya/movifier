import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByWithRelationInput } from "../inputs/MovieOrderByWithRelationInput";
import { MovieReviewOrderByWithRelationInput } from "../inputs/MovieReviewOrderByWithRelationInput";
import { MovifierAppUserOrderByWithRelationInput } from "../inputs/MovifierAppUserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieRatingOrderByWithRelationInput", {})
export class MovieRatingOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewOrderByWithRelationInput, {
    nullable: true,
  })
  Review?: MovieReviewOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovieOrderByWithRelationInput, {
    nullable: true,
  })
  movie?: MovieOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: MovifierAppUserOrderByWithRelationInput | undefined;
}
