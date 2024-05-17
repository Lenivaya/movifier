import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCountMovieListCommentsArgs } from "./args/MovieListCountMovieListCommentsArgs";
import { MovieListCountMoviesArgs } from "./args/MovieListCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieListCount", {})
export class MovieListCount {
  movies!: number;
  movieListComments!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movies",
    nullable: false,
  })
  getMovies(
    @TypeGraphQL.Root() root: MovieListCount,
    @TypeGraphQL.Args() args: MovieListCountMoviesArgs,
  ): number {
    return root.movies;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movieListComments",
    nullable: false,
  })
  getMovieListComments(
    @TypeGraphQL.Root() root: MovieListCount,
    @TypeGraphQL.Args() args: MovieListCountMovieListCommentsArgs,
  ): number {
    return root.movieListComments;
  }
}
