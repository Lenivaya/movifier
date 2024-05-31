import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateNestedOneWithoutLikedByInput } from "../inputs/MovieListCreateNestedOneWithoutLikedByInput";
import { MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateInput", {})
export class MovieListLikedByUserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateNestedOneWithoutLikedByInput, {
    nullable: false
  })
  movieList!: MovieListCreateNestedOneWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
}
