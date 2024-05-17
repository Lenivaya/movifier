import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput } from "../inputs/MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput";
import { MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieListCommentUpdateInput", {})
export class MovieListCommentUpdateInput {
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

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput,
    {
      nullable: true,
    },
  )
  movieList?:
    | MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) =>
      MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput,
    {
      nullable: true,
    },
  )
  user?:
    | MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput
    | undefined;
}
