import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateNestedOneWithoutLikedByInput } from "../inputs/MovieReviewCreateNestedOneWithoutLikedByInput";
import { MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateInput", {})
export class MovieReviewLikedByUserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedOneWithoutLikedByInput, {
    nullable: false
  })
  movieReview!: MovieReviewCreateNestedOneWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
}
