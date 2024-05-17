import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutMoviesInput } from "../inputs/MovieListCreateWithoutMoviesInput";
import { MovieListUpdateWithoutMoviesInput } from "../inputs/MovieListUpdateWithoutMoviesInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpsertWithWhereUniqueWithoutMoviesInput", {})
export class MovieListUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: MovieListUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieListCreateWithoutMoviesInput;
}
