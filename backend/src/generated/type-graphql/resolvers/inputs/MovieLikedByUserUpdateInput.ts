import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutLikedByNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutLikedByNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateInput", {})
export class MovieLikedByUserUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutLikedByNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutLikedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput, {
    nullable: true
  })
  user?: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput | undefined;
}
