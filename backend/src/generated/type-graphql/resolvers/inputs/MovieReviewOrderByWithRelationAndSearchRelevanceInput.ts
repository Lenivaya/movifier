import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieRatingOrderByWithRelationAndSearchRelevanceInput";
import { MovieReviewOrderByRelevanceInput } from "../inputs/MovieReviewOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieReviewOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieReviewOrderByWithRelationAndSearchRelevanceInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  ratingId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieRatingOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  rating?: MovieRatingOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieReviewOrderByRelevanceInput | undefined;
}
