import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListAuthorInput } from "../inputs/MovieListCreateWithoutMovieListAuthorInput";
import { MovieListUpdateWithoutMovieListAuthorInput } from "../inputs/MovieListUpdateWithoutMovieListAuthorInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput",
  {},
)
export class MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput {
  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListUpdateWithoutMovieListAuthorInput, {
    nullable: false,
  })
  update!: MovieListUpdateWithoutMovieListAuthorInput;

  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMovieListAuthorInput, {
    nullable: false,
  })
  create!: MovieListCreateWithoutMovieListAuthorInput;
}
