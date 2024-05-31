import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMoviefireAppUserRoleFilter } from "../inputs/EnumMoviefireAppUserRoleFilter";
import { MovieLikedByUserListRelationFilter } from "../inputs/MovieLikedByUserListRelationFilter";
import { MovieListCommentListRelationFilter } from "../inputs/MovieListCommentListRelationFilter";
import { MovieListLikedByUserListRelationFilter } from "../inputs/MovieListLikedByUserListRelationFilter";
import { MovieListListRelationFilter } from "../inputs/MovieListListRelationFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { MovieRatingListRelationFilter } from "../inputs/MovieRatingListRelationFilter";
import { MovieReviewLikedByUserListRelationFilter } from "../inputs/MovieReviewLikedByUserListRelationFilter";
import { MovieWatchedByUserListRelationFilter } from "../inputs/MovieWatchedByUserListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovifierAppUserWhereInput", {})
export class MovifierAppUserWhereInput {
  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  AND?: MovifierAppUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  OR?: MovifierAppUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserWhereInput], {
    nullable: true
  })
  NOT?: MovifierAppUserWhereInput[] | undefined;

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
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMoviefireAppUserRoleFilter, {
    nullable: true
  })
  role?: EnumMoviefireAppUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  watchlist?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRatingListRelationFilter, {
    nullable: true
  })
  ratedMovies?: MovieRatingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserListRelationFilter, {
    nullable: true
  })
  watchedMovies?: MovieWatchedByUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserListRelationFilter, {
    nullable: true
  })
  likedMovies?: MovieLikedByUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListListRelationFilter, {
    nullable: true
  })
  movieLists?: MovieListListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentListRelationFilter, {
    nullable: true
  })
  movieListsComments?: MovieListCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserListRelationFilter, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikedByUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserListRelationFilter, {
    nullable: true
  })
  MovieListLikedByUser?: MovieListLikedByUserListRelationFilter | undefined;
}
