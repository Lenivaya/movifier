import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMoviefireAppUserRoleFieldUpdateOperationsInput } from "../inputs/EnumMoviefireAppUserRoleFieldUpdateOperationsInput";
import { MovieLikedByUserUpdateManyWithoutUserNestedInput } from "../inputs/MovieLikedByUserUpdateManyWithoutUserNestedInput";
import { MovieListCommentUpdateManyWithoutUserNestedInput } from "../inputs/MovieListCommentUpdateManyWithoutUserNestedInput";
import { MovieListLikedByUserUpdateManyWithoutUserNestedInput } from "../inputs/MovieListLikedByUserUpdateManyWithoutUserNestedInput";
import { MovieListUpdateManyWithoutMovieListAuthorNestedInput } from "../inputs/MovieListUpdateManyWithoutMovieListAuthorNestedInput";
import { MovieReviewLikedByUserUpdateManyWithoutUserNestedInput } from "../inputs/MovieReviewLikedByUserUpdateManyWithoutUserNestedInput";
import { MovieWatchedByUserUpdateManyWithoutUserNestedInput } from "../inputs/MovieWatchedByUserUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserMovieWatchlistUpdateManyWithoutUserNestedInput } from "../inputs/UserMovieWatchlistUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateWithoutRatedMoviesInput", {})
export class MovifierAppUserUpdateWithoutRatedMoviesInput {
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
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumMoviefireAppUserRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumMoviefireAppUserRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  watchlist?: UserMovieWatchlistUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  watchedMovies?: MovieWatchedByUserUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  likedMovies?: MovieLikedByUserUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateManyWithoutMovieListAuthorNestedInput, {
    nullable: true
  })
  movieLists?: MovieListUpdateManyWithoutMovieListAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  movieListsComments?: MovieListCommentUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikedByUserUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  MovieListLikedByUser?: MovieListLikedByUserUpdateManyWithoutUserNestedInput | undefined;
}
