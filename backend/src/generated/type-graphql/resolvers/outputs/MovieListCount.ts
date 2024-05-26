import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCountCommentsArgs } from "./args/MovieListCountCommentsArgs";
import { MovieListCountLikedByArgs } from "./args/MovieListCountLikedByArgs";
import { MovieListCountMoviesArgs } from "./args/MovieListCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieListCount", {})
export class MovieListCount {
  movies!: number;
  comments!: number;
  likedBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: MovieListCount, @TypeGraphQL.Args() args: MovieListCountMoviesArgs): number {
    return root.movies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: MovieListCount, @TypeGraphQL.Args() args: MovieListCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedBy",
    nullable: false
  })
  getLikedBy(@TypeGraphQL.Root() root: MovieListCount, @TypeGraphQL.Args() args: MovieListCountLikedByArgs): number {
    return root.likedBy;
  }
}
