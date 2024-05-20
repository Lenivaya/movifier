import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCountMoviesArgs } from "./args/GenreCountMoviesArgs";

@TypeGraphQL.ObjectType("GenreCount", {})
export class GenreCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: GenreCount, @TypeGraphQL.Args() args: GenreCountMoviesArgs): number {
    return root.movies;
  }
}
