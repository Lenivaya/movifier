import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentScalarWhereInput } from "../inputs/MovieListCommentScalarWhereInput";
import { MovieListCommentUpdateManyMutationInput } from "../inputs/MovieListCommentUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieListCommentUpdateManyWithWhereWithoutMovieListInput", {})
export class MovieListCommentUpdateManyWithWhereWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListCommentScalarWhereInput, {
    nullable: false
  })
  where!: MovieListCommentScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieListCommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListCommentUpdateManyMutationInput;
}
