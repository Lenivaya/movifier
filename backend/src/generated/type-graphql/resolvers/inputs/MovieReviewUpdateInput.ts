import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieRatingUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/MovieRatingUpdateOneRequiredWithoutReviewNestedInput";
import { MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput } from "../inputs/MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieReviewUpdateInput", {})
export class MovieReviewUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingUpdateOneRequiredWithoutReviewNestedInput, {
    nullable: true
  })
  rating?: MovieRatingUpdateOneRequiredWithoutReviewNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput, {
    nullable: true
  })
  likedBy?: MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput | undefined;
}
