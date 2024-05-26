import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateNestedOneWithoutLikedByInput } from "../inputs/MovieReviewCreateNestedOneWithoutLikedByInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateWithoutUserInput", {})
export class MovieReviewLikedByUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedOneWithoutLikedByInput, {
    nullable: false
  })
  movieReview!: MovieReviewCreateNestedOneWithoutLikedByInput;
}
