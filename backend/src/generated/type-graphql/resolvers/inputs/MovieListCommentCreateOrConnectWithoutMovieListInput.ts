import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateWithoutMovieListInput } from "../inputs/MovieListCommentCreateWithoutMovieListInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCommentCreateOrConnectWithoutMovieListInput",
  {},
)
export class MovieListCommentCreateOrConnectWithoutMovieListInput {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCommentCreateWithoutMovieListInput, {
    nullable: false,
  })
  create!: MovieListCommentCreateWithoutMovieListInput;
}
