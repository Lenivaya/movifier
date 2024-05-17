import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentWhereInput } from "../inputs/MovieListCommentWhereInput";

@TypeGraphQL.InputType("MovieListCommentListRelationFilter", {})
export class MovieListCommentListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieListCommentWhereInput, {
    nullable: true,
  })
  every?: MovieListCommentWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentWhereInput, {
    nullable: true,
  })
  some?: MovieListCommentWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieListCommentWhereInput, {
    nullable: true,
  })
  none?: MovieListCommentWhereInput | undefined;
}
