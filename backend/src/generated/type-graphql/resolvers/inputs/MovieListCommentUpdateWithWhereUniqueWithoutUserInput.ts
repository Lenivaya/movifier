import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentUpdateWithoutUserInput } from "../inputs/MovieListCommentUpdateWithoutUserInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCommentUpdateWithWhereUniqueWithoutUserInput",
  {},
)
export class MovieListCommentUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCommentUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: MovieListCommentUpdateWithoutUserInput;
}
