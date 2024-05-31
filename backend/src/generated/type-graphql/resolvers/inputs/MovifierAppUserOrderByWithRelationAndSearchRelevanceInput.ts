import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserOrderByRelationAggregateInput } from "../inputs/MovieLikedByUserOrderByRelationAggregateInput";
import { MovieListCommentOrderByRelationAggregateInput } from "../inputs/MovieListCommentOrderByRelationAggregateInput";
import { MovieListLikedByUserOrderByRelationAggregateInput } from "../inputs/MovieListLikedByUserOrderByRelationAggregateInput";
import { MovieListOrderByRelationAggregateInput } from "../inputs/MovieListOrderByRelationAggregateInput";
import { MovieRatingOrderByRelationAggregateInput } from "../inputs/MovieRatingOrderByRelationAggregateInput";
import { MovieReviewLikedByUserOrderByRelationAggregateInput } from "../inputs/MovieReviewLikedByUserOrderByRelationAggregateInput";
import { MovieWatchedByUserOrderByRelationAggregateInput } from "../inputs/MovieWatchedByUserOrderByRelationAggregateInput";
import { MovifierAppUserOrderByRelevanceInput } from "../inputs/MovifierAppUserOrderByRelevanceInput";
import { UserMovieWatchlistOrderByRelationAggregateInput } from "../inputs/UserMovieWatchlistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovifierAppUserOrderByWithRelationAndSearchRelevanceInput", {})
export class MovifierAppUserOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistOrderByRelationAggregateInput, {
    nullable: true
  })
  watchlist?: UserMovieWatchlistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingOrderByRelationAggregateInput, {
    nullable: true
  })
  ratedMovies?: MovieRatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  watchedMovies?: MovieWatchedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  likedMovies?: MovieLikedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListOrderByRelationAggregateInput, {
    nullable: true
  })
  movieLists?: MovieListOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentOrderByRelationAggregateInput, {
    nullable: true
  })
  movieListsComments?: MovieListCommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserOrderByRelationAggregateInput, {
    nullable: true
  })
  MovieListLikedByUser?: MovieListLikedByUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovifierAppUserOrderByRelevanceInput | undefined;
}
