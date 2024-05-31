import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCountMoviesArgs } from "./args/MovieSpokenLanguageCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieSpokenLanguageCount", {})
export class MovieSpokenLanguageCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: MovieSpokenLanguageCount, @TypeGraphQL.Args() args: MovieSpokenLanguageCountMoviesArgs): number {
    return root.movies;
  }
}
