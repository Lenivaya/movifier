import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutWatchedByNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutWatchedByNestedInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateWithoutUserInput", {})
export class MovieWatchedByUserUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutWatchedByNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutWatchedByNestedInput | undefined;
}
