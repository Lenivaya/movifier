import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMovieListAuthorInput } from "../inputs/MovieListCreateWithoutMovieListAuthorInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCreateOrConnectWithoutMovieListAuthorInput",
  {},
)
export class MovieListCreateOrConnectWithoutMovieListAuthorInput {
  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMovieListAuthorInput, {
    nullable: false,
  })
  create!: MovieListCreateWithoutMovieListAuthorInput;
}
