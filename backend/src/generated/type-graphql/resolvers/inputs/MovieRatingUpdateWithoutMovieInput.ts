import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewUpdateOneWithoutRatingNestedInput } from "../inputs/MovieReviewUpdateOneWithoutRatingNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieRatingUpdateWithoutMovieInput", {})
export class MovieRatingUpdateWithoutMovieInput {
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

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateOneWithoutRatingNestedInput, {
    nullable: true
  })
  Review?: MovieReviewUpdateOneWithoutRatingNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput | undefined;
}
