import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutReviewInput } from "../inputs/MovieRatingCreateWithoutReviewInput";
import { MovieRatingUpdateWithoutReviewInput } from "../inputs/MovieRatingUpdateWithoutReviewInput";
import { MovieRatingWhereInput } from "../inputs/MovieRatingWhereInput";

@TypeGraphQL.InputType("MovieRatingUpsertWithoutReviewInput", {})
export class MovieRatingUpsertWithoutReviewInput {
  @TypeGraphQL.Field((_type) => MovieRatingUpdateWithoutReviewInput, {
    nullable: false,
  })
  update!: MovieRatingUpdateWithoutReviewInput;

  @TypeGraphQL.Field((_type) => MovieRatingCreateWithoutReviewInput, {
    nullable: false,
  })
  create!: MovieRatingCreateWithoutReviewInput;

  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  where?: MovieRatingWhereInput | undefined;
}
