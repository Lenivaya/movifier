import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieListUpdateOneRequiredWithoutLikedByNestedInput } from "../inputs/MovieListUpdateOneRequiredWithoutLikedByNestedInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateWithoutUserInput", {})
export class MovieListLikedByUserUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateOneRequiredWithoutLikedByNestedInput, {
    nullable: true
  })
  movieList?: MovieListUpdateOneRequiredWithoutLikedByNestedInput | undefined;
}
