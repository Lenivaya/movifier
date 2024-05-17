import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateWithoutRatingInput } from "../inputs/MovieReviewUpdateWithoutRatingInput";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewUpdateToOneWithWhereWithoutRatingInput", {})
export class MovieReviewUpdateToOneWithWhereWithoutRatingInput {
  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  where?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewUpdateWithoutRatingInput, {
    nullable: false,
  })
  data!: MovieReviewUpdateWithoutRatingInput;
}
