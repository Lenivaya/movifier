import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateWithoutUserInput } from "../inputs/MovieListCommentCreateWithoutUserInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentCreateOrConnectWithoutUserInput", {})
export class MovieListCommentCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieListCommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieListCommentCreateWithoutUserInput, {
    nullable: false,
  })
  create!: MovieListCommentCreateWithoutUserInput;
}
