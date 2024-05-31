import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieListCommentUpdateManyWithoutMovieListNestedInput } from "../inputs/MovieListCommentUpdateManyWithoutMovieListNestedInput";
import { MovieListLikedByUserUpdateManyWithoutMovieListNestedInput } from "../inputs/MovieListLikedByUserUpdateManyWithoutMovieListNestedInput";
import { MovieListStatsUpdateOneWithoutMovieListNestedInput } from "../inputs/MovieListStatsUpdateOneWithoutMovieListNestedInput";
import { MovieListUpdatetagsInput } from "../inputs/MovieListUpdatetagsInput";
import { MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput } from "../inputs/MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieListUpdateWithoutMoviesInput", {})
export class MovieListUpdateWithoutMoviesInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdatetagsInput, {
    nullable: true
  })
  tags?: MovieListUpdatetagsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput, {
    nullable: true
  })
  movieListAuthor?: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListStatsUpdateOneWithoutMovieListNestedInput, {
    nullable: true
  })
  stats?: MovieListStatsUpdateOneWithoutMovieListNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentUpdateManyWithoutMovieListNestedInput, {
    nullable: true
  })
  comments?: MovieListCommentUpdateManyWithoutMovieListNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateManyWithoutMovieListNestedInput, {
    nullable: true
  })
  likedBy?: MovieListLikedByUserUpdateManyWithoutMovieListNestedInput | undefined;
}
