import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListCommentsInput } from "../inputs/MovieListCreateWithoutMovieListCommentsInput";
import { MovieListUpdateWithoutMovieListCommentsInput } from "../inputs/MovieListUpdateWithoutMovieListCommentsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpsertWithoutMovieListCommentsInput", {})
export class MovieListUpsertWithoutMovieListCommentsInput {
  @TypeGraphQL.Field(_type => MovieListUpdateWithoutMovieListCommentsInput, {
    nullable: false
  })
  update!: MovieListUpdateWithoutMovieListCommentsInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutMovieListCommentsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutMovieListCommentsInput;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;
}
