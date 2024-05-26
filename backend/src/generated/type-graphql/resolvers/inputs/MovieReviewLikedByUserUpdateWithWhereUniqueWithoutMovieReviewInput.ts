import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserUpdateWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserUpdateWithoutMovieReviewInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput", {})
export class MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateWithoutMovieReviewInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
}
