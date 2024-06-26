import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutMovieListAuthorInput } from "../inputs/MovieListUpdateWithoutMovieListAuthorInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput", {})
export class MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutMovieListAuthorInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutMovieListAuthorInput;
}
