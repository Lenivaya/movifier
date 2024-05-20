import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieListStatsUpdateOneWithoutMovieListNestedInput } from "../inputs/MovieListStatsUpdateOneWithoutMovieListNestedInput";
import { MovieUpdateManyWithoutMovieListsNestedInput } from "../inputs/MovieUpdateManyWithoutMovieListsNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieListUpdateWithoutMovieListCommentsInput", {})
export class MovieListUpdateWithoutMovieListCommentsInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutMovieListsNestedInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutMovieListsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput, {
    nullable: true
  })
  movieListAuthor?: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsUpdateOneWithoutMovieListNestedInput, {
    nullable: true
  })
  MovieListStats?: MovieListStatsUpdateOneWithoutMovieListNestedInput | undefined;
}
