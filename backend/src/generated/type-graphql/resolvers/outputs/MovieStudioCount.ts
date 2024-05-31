import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCountMoviesArgs } from "./args/MovieStudioCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieStudioCount", {})
export class MovieStudioCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: MovieStudioCount, @TypeGraphQL.Args() args: MovieStudioCountMoviesArgs): number {
    return root.movies;
  }
}
