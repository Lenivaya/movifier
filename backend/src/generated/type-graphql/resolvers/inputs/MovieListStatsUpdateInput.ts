import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieListUpdateOneRequiredWithoutMovieListStatsNestedInput } from "../inputs/MovieListUpdateOneRequiredWithoutMovieListStatsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieListStatsUpdateInput", {})
export class MovieListStatsUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  views?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  likes?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListUpdateOneRequiredWithoutMovieListStatsNestedInput,
    {
      nullable: true,
    },
  )
  MovieList?:
    | MovieListUpdateOneRequiredWithoutMovieListStatsNestedInput
    | undefined;
}
