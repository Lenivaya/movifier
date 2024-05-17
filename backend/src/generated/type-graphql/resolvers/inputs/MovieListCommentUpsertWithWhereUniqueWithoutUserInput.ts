import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateWithoutUserInput } from "../inputs/MovieListCommentCreateWithoutUserInput";
import { MovieListCommentUpdateWithoutUserInput } from "../inputs/MovieListCommentUpdateWithoutUserInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCommentUpsertWithWhereUniqueWithoutUserInput",
  {},
)
export class MovieListCommentUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCommentUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: MovieListCommentUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => MovieListCommentCreateWithoutUserInput, {
    nullable: false,
  })
  create!: MovieListCommentCreateWithoutUserInput;
}
