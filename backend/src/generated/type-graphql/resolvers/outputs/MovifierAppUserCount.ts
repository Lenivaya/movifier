import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCountMovieListsArgs } from "./args/MovifierAppUserCountMovieListsArgs";
import { MovifierAppUserCountMovieListsCommentsArgs } from "./args/MovifierAppUserCountMovieListsCommentsArgs";
import { MovifierAppUserCountRatingArgs } from "./args/MovifierAppUserCountRatingArgs";
import { MovifierAppUserCountWatchlistArgs } from "./args/MovifierAppUserCountWatchlistArgs";

@TypeGraphQL.ObjectType("MovifierAppUserCount", {})
export class MovifierAppUserCount {
  watchlist!: number;
  rating!: number;
  movieLists!: number;
  movieListsComments!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "watchlist",
    nullable: false,
  })
  getWatchlist(
    @TypeGraphQL.Root() root: MovifierAppUserCount,
    @TypeGraphQL.Args() args: MovifierAppUserCountWatchlistArgs,
  ): number {
    return root.watchlist;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "rating",
    nullable: false,
  })
  getRating(
    @TypeGraphQL.Root() root: MovifierAppUserCount,
    @TypeGraphQL.Args() args: MovifierAppUserCountRatingArgs,
  ): number {
    return root.rating;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movieLists",
    nullable: false,
  })
  getMovieLists(
    @TypeGraphQL.Root() root: MovifierAppUserCount,
    @TypeGraphQL.Args() args: MovifierAppUserCountMovieListsArgs,
  ): number {
    return root.movieLists;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movieListsComments",
    nullable: false,
  })
  getMovieListsComments(
    @TypeGraphQL.Root() root: MovifierAppUserCount,
    @TypeGraphQL.Args() args: MovifierAppUserCountMovieListsCommentsArgs,
  ): number {
    return root.movieListsComments;
  }
}
