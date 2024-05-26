import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateWithoutMovieReviewInput";
import { MovieReviewLikedByUserUpdateWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserUpdateWithoutMovieReviewInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput", {})
export class MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateWithoutMovieReviewInput, {
    nullable: false
  })
  update!: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateWithoutMovieReviewInput, {
    nullable: false
  })
  create!: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
}
