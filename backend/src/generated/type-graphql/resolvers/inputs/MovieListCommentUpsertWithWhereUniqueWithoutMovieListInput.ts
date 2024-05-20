import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateWithoutMovieListInput } from "../inputs/MovieListCommentCreateWithoutMovieListInput";
import { MovieListCommentUpdateWithoutMovieListInput } from "../inputs/MovieListCommentUpdateWithoutMovieListInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput", {})
export class MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListCommentWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCommentUpdateWithoutMovieListInput, {
    nullable: false
  })
  update!: MovieListCommentUpdateWithoutMovieListInput;

  @TypeGraphQL.Field(_type => MovieListCommentCreateWithoutMovieListInput, {
    nullable: false
  })
  create!: MovieListCommentCreateWithoutMovieListInput;
}
