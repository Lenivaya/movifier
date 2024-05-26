import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateWithoutMovieReviewInput", {})
export class MovieReviewLikedByUserCreateWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
}
