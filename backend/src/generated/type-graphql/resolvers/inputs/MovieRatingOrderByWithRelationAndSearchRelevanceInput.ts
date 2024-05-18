import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { MovieRatingOrderByRelevanceInput } from "../inputs/MovieRatingOrderByRelevanceInput";
import { MovieReviewOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieReviewOrderByWithRelationAndSearchRelevanceInput";
import { MovifierAppUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovifierAppUserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "MovieRatingOrderByWithRelationAndSearchRelevanceInput",
  {},
)
export class MovieRatingOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(
    (_type) => MovieReviewOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  Review?: MovieReviewOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  movie?: MovieOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  user?: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: MovieRatingOrderByRelevanceInput | undefined;
}
