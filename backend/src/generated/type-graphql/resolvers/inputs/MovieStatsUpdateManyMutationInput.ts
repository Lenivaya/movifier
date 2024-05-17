import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieStatsUpdateManyMutationInput", {})
export class MovieStatsUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  timesWatchedCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  totalRatingsCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  totalLikesCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  overallPlaceINTop?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  avgRating?: FloatFieldUpdateOperationsInput | undefined;
}
