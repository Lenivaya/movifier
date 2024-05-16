import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListCommentsInput } from "../inputs/MovieListCreateWithoutMovieListCommentsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCreateOrConnectWithoutMovieListCommentsInput",
  {},
)
export class MovieListCreateOrConnectWithoutMovieListCommentsInput {
  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMovieListCommentsInput, {
    nullable: false,
  })
  create!: MovieListCreateWithoutMovieListCommentsInput;
}
