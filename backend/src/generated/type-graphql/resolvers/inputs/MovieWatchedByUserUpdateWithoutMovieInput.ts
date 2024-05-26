import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateWithoutMovieInput", {})
export class MovieWatchedByUserUpdateWithoutMovieInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput | undefined;
}
