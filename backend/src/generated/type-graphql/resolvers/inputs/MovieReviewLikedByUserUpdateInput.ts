import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieReviewUpdateOneRequiredWithoutLikedByNestedInput } from "../inputs/MovieReviewUpdateOneRequiredWithoutLikedByNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateInput", {})
export class MovieReviewLikedByUserUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateOneRequiredWithoutLikedByNestedInput, {
    nullable: true
  })
  movieReview?: MovieReviewUpdateOneRequiredWithoutLikedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput | undefined;
}
