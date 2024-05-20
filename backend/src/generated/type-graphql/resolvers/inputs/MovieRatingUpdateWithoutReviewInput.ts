import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutRatingsNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieRatingUpdateWithoutReviewInput", {})
export class MovieRatingUpdateWithoutReviewInput {
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

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutRatingsNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutRatingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput | undefined;
}
