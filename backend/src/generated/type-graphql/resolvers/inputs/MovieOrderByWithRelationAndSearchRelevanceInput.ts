import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { MovieCrewMemberOnMovieOrderByRelationAggregateInput } from "../inputs/MovieCrewMemberOnMovieOrderByRelationAggregateInput";
import { MovieInfoOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieInfoOrderByWithRelationAndSearchRelevanceInput";
import { MovieKeywordCategoryOrderByRelationAggregateInput } from "../inputs/MovieKeywordCategoryOrderByRelationAggregateInput";
import { MovieLikedByUserOrderByRelationAggregateInput } from "../inputs/MovieLikedByUserOrderByRelationAggregateInput";
import { MovieListOrderByRelationAggregateInput } from "../inputs/MovieListOrderByRelationAggregateInput";
import { MovieOrderByRelevanceInput } from "../inputs/MovieOrderByRelevanceInput";
import { MovieRatingOrderByRelationAggregateInput } from "../inputs/MovieRatingOrderByRelationAggregateInput";
import { MovieSpokenLanguageOrderByRelationAggregateInput } from "../inputs/MovieSpokenLanguageOrderByRelationAggregateInput";
import { MovieStatsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MovieStatsOrderByWithRelationAndSearchRelevanceInput";
import { MovieStudioOrderByRelationAggregateInput } from "../inputs/MovieStudioOrderByRelationAggregateInput";
import { MovieWatchedByUserOrderByRelationAggregateInput } from "../inputs/MovieWatchedByUserOrderByRelationAggregateInput";
import { UserMovieWatchlistOrderByRelationAggregateInput } from "../inputs/UserMovieWatchlistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieInfoOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieInfo?: MovieInfoOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  movieStats?: MovieStatsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  crewMembers?: MovieCrewMemberOnMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieStudioOrderByRelationAggregateInput, {
    nullable: true
  })
  studios?: MovieStudioOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreOrderByRelationAggregateInput, {
    nullable: true
  })
  genres?: GenreOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  keywordCategories?: MovieKeywordCategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingOrderByRelationAggregateInput, {
    nullable: true
  })
  ratedBy?: MovieRatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListOrderByRelationAggregateInput, {
    nullable: true
  })
  movieLists?: MovieListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageOrderByRelationAggregateInput, {
    nullable: true
  })
  spokenLanguages?: MovieSpokenLanguageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  watchedBy?: MovieWatchedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  likedBy?: MovieLikedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistOrderByRelationAggregateInput, {
    nullable: true
  })
  inWatchlistByUsers?: UserMovieWatchlistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieOrderByRelevanceInput | undefined;
}
