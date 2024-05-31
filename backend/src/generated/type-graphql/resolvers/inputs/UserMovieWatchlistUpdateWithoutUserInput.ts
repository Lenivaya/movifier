import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpdateWithoutUserInput", {})
export class UserMovieWatchlistUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput | undefined;
}
