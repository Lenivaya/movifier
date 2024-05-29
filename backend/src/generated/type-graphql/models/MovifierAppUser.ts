import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieLikedByUser } from "../models/MovieLikedByUser";
import { MovieList } from "../models/MovieList";
import { MovieListComment } from "../models/MovieListComment";
import { MovieListLikedByUser } from "../models/MovieListLikedByUser";
import { MovieRating } from "../models/MovieRating";
import { MovieReviewLikedByUser } from "../models/MovieReviewLikedByUser";
import { MovieWatchedByUser } from "../models/MovieWatchedByUser";
import { UserMovieWatchlist } from "../models/UserMovieWatchlist";
import { MoviefireAppUserRole } from "../enums/MoviefireAppUserRole";
import { MovifierAppUserCount } from "../resolvers/outputs/MovifierAppUserCount";

@TypeGraphQL.ObjectType("MovifierAppUser", {})
export class MovifierAppUser {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  password?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MoviefireAppUserRole, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  watchlist?: UserMovieWatchlist[];

  ratedMovies?: MovieRating[];

  watchedMovies?: MovieWatchedByUser[];

  likedMovies?: MovieLikedByUser[];

  movieLists?: MovieList[];

  movieListsComments?: MovieListComment[];

  likedMovieReviews?: MovieReviewLikedByUser[];

  MovieListLikedByUser?: MovieListLikedByUser[];

  @TypeGraphQL.Field(_type => MovifierAppUserCount, {
    nullable: true
  })
  _count?: MovifierAppUserCount | null;
}
