import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateWithoutMovieInput", {})
export class MovieLikedByUserUpdateWithoutMovieInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput | undefined;
}
