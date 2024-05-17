import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentUpdateWithoutMovieListInput } from "../inputs/MovieListCommentUpdateWithoutMovieListInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput",
  {},
)
export class MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCommentUpdateWithoutMovieListInput, {
    nullable: false,
  })
  data!: MovieListCommentUpdateWithoutMovieListInput;
}
