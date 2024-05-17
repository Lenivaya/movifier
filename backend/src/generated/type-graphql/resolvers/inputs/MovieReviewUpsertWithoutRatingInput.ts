import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutRatingInput } from "../inputs/MovieReviewCreateWithoutRatingInput";
import { MovieReviewUpdateWithoutRatingInput } from "../inputs/MovieReviewUpdateWithoutRatingInput";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewUpsertWithoutRatingInput", {})
export class MovieReviewUpsertWithoutRatingInput {
  @TypeGraphQL.Field((_type) => MovieReviewUpdateWithoutRatingInput, {
    nullable: false,
  })
  update!: MovieReviewUpdateWithoutRatingInput;

  @TypeGraphQL.Field((_type) => MovieReviewCreateWithoutRatingInput, {
    nullable: false,
  })
  create!: MovieReviewCreateWithoutRatingInput;

  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  where?: MovieReviewWhereInput | undefined;
}
