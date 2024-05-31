import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCountMoviesArgs } from "./args/MovieCrewMemberCountMoviesArgs";

@TypeGraphQL.ObjectType("MovieCrewMemberCount", {})
export class MovieCrewMemberCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: MovieCrewMemberCount, @TypeGraphQL.Args() args: MovieCrewMemberCountMoviesArgs): number {
    return root.movies;
  }
}
