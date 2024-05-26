import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserOrderByRelevanceInput } from "../inputs/MovieReviewLikedByUserOrderByRelevanceInput";
import { MovieReviewOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieReviewOrderByWithRelationAndSearchRelevanceInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieReviewId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieReviewOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieReview?: MovieReviewOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieReviewLikedByUserOrderByRelevanceInput | undefined;
}
