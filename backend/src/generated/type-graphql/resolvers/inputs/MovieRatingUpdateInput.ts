import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewUpdateOneWithoutRatingNestedInput } from "../inputs/MovieReviewUpdateOneWithoutRatingNestedInput";
import { MovieUpdateOneRequiredWithoutRatedByNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutRatedByNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieRatingUpdateInput", {})
export class MovieRatingUpdateInput {
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
  review?: MovieReviewUpdateOneWithoutRatingNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutRatedByNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutRatedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput | undefined;
}
