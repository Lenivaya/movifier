import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCountLikedMovieReviewsArgs } from "./args/MovifierAppUserCountLikedMovieReviewsArgs";
import { MovifierAppUserCountLikedMoviesArgs } from "./args/MovifierAppUserCountLikedMoviesArgs";
import { MovifierAppUserCountMovieListLikedByUserArgs } from "./args/MovifierAppUserCountMovieListLikedByUserArgs";
import { MovifierAppUserCountMovieListsArgs } from "./args/MovifierAppUserCountMovieListsArgs";
import { MovifierAppUserCountMovieListsCommentsArgs } from "./args/MovifierAppUserCountMovieListsCommentsArgs";
import { MovifierAppUserCountRatedMoviesArgs } from "./args/MovifierAppUserCountRatedMoviesArgs";
import { MovifierAppUserCountWatchedMoviesArgs } from "./args/MovifierAppUserCountWatchedMoviesArgs";
import { MovifierAppUserCountWatchlistArgs } from "./args/MovifierAppUserCountWatchlistArgs";

@TypeGraphQL.ObjectType("MovifierAppUserCount", {})
export class MovifierAppUserCount {
  watchlist!: number;
  ratedMovies!: number;
  watchedMovies!: number;
  likedMovies!: number;
  movieLists!: number;
  movieListsComments!: number;
  likedMovieReviews!: number;
  MovieListLikedByUser!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "watchlist",
    nullable: false
  })
  getWatchlist(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountWatchlistArgs): number {
    return root.watchlist;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ratedMovies",
    nullable: false
  })
  getRatedMovies(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountRatedMoviesArgs): number {
    return root.ratedMovies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "watchedMovies",
    nullable: false
  })
  getWatchedMovies(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountWatchedMoviesArgs): number {
    return root.watchedMovies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedMovies",
    nullable: false
  })
  getLikedMovies(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountLikedMoviesArgs): number {
    return root.likedMovies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movieLists",
    nullable: false
  })
  getMovieLists(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountMovieListsArgs): number {
    return root.movieLists;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movieListsComments",
    nullable: false
  })
  getMovieListsComments(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountMovieListsCommentsArgs): number {
    return root.movieListsComments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedMovieReviews",
    nullable: false
  })
  getLikedMovieReviews(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountLikedMovieReviewsArgs): number {
    return root.likedMovieReviews;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "MovieListLikedByUser",
    nullable: false
  })
  getMovieListLikedByUser(@TypeGraphQL.Root() root: MovifierAppUserCount, @TypeGraphQL.Args() args: MovifierAppUserCountMovieListLikedByUserArgs): number {
    return root.MovieListLikedByUser;
  }
}
