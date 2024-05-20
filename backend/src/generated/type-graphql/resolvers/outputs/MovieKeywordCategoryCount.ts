import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCountMoviesArgs } from "./args/MovieKeywordCategoryCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieKeywordCategoryCount", {})
export class MovieKeywordCategoryCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: MovieKeywordCategoryCount, @TypeGraphQL.Args() args: MovieKeywordCategoryCountMoviesArgs): number {
    return root.movies;
  }
}
