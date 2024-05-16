import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { MovieCrewMemberOrderByRelationAggregateInput } from "../inputs/MovieCrewMemberOrderByRelationAggregateInput";
import { MovieInfoOrderByWithRelationInput } from "../inputs/MovieInfoOrderByWithRelationInput";
import { MovieKeywordCategoryOrderByRelationAggregateInput } from "../inputs/MovieKeywordCategoryOrderByRelationAggregateInput";
import { MovieListOrderByRelationAggregateInput } from "../inputs/MovieListOrderByRelationAggregateInput";
import { MovieRatingOrderByRelationAggregateInput } from "../inputs/MovieRatingOrderByRelationAggregateInput";
import { MovieSpokenLanguageOrderByRelationAggregateInput } from "../inputs/MovieSpokenLanguageOrderByRelationAggregateInput";
import { MovieStatsOrderByWithRelationInput } from "../inputs/MovieStatsOrderByWithRelationInput";
import { MovieStudioOrderByRelationAggregateInput } from "../inputs/MovieStudioOrderByRelationAggregateInput";
import { MovifierAppUserOrderByRelationAggregateInput } from "../inputs/MovifierAppUserOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithRelationInput", {})
export class MovieOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  genreName?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoOrderByWithRelationInput, {
    nullable: true,
  })
  movieInfo?: MovieInfoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsOrderByWithRelationInput, {
    nullable: true,
  })
  MovieStats?: MovieStatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOrderByRelationAggregateInput, {
    nullable: true,
  })
  crewMembers?: MovieCrewMemberOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioOrderByRelationAggregateInput, {
    nullable: true,
  })
  studios?: MovieStudioOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => GenreOrderByRelationAggregateInput, {
    nullable: true,
  })
  genres?: GenreOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieKeywordCategoryOrderByRelationAggregateInput,
    {
      nullable: true,
    },
  )
  keywordCategories?:
    | MovieKeywordCategoryOrderByRelationAggregateInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingOrderByRelationAggregateInput, {
    nullable: true,
  })
  ratings?: MovieRatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListOrderByRelationAggregateInput, {
    nullable: true,
  })
  movieLists?: MovieListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserOrderByRelationAggregateInput, {
    nullable: true,
  })
  inWatchlistByUsers?: MovifierAppUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieSpokenLanguageOrderByRelationAggregateInput,
    {
      nullable: true,
    },
  )
  spokenLanguages?:
    | MovieSpokenLanguageOrderByRelationAggregateInput
    | undefined;
}
