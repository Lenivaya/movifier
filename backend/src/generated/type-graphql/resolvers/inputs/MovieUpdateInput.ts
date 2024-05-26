import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutMoviesNestedInput } from "../inputs/GenreUpdateManyWithoutMoviesNestedInput";
import { MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput";
import { MovieInfoUpdateOneWithoutMovieNestedInput } from "../inputs/MovieInfoUpdateOneWithoutMovieNestedInput";
import { MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput";
import { MovieLikedByUserUpdateManyWithoutMovieNestedInput } from "../inputs/MovieLikedByUserUpdateManyWithoutMovieNestedInput";
import { MovieListUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieListUpdateManyWithoutMoviesNestedInput";
import { MovieRatingUpdateManyWithoutMovieNestedInput } from "../inputs/MovieRatingUpdateManyWithoutMovieNestedInput";
import { MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput";
import { MovieStatsUpdateOneWithoutMovieNestedInput } from "../inputs/MovieStatsUpdateOneWithoutMovieNestedInput";
import { MovieStudioUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieStudioUpdateManyWithoutMoviesNestedInput";
import { MovieWatchedByUserUpdateManyWithoutMovieNestedInput } from "../inputs/MovieWatchedByUserUpdateManyWithoutMovieNestedInput";
import { MovifierAppUserUpdateManyWithoutWatchlistNestedInput } from "../inputs/MovifierAppUserUpdateManyWithoutWatchlistNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieUpdateInput", {})
export class MovieUpdateInput {
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

  @TypeGraphQL.Field(_type => MovieInfoUpdateOneWithoutMovieNestedInput, {
    nullable: true
  })
  movieInfo?: MovieInfoUpdateOneWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsUpdateOneWithoutMovieNestedInput, {
    nullable: true
  })
  movieStats?: MovieStatsUpdateOneWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput, {
    nullable: true
  })
  crewMembers?: MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieStudioUpdateManyWithoutMoviesNestedInput, {
    nullable: true
  })
  studios?: MovieStudioUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutMoviesNestedInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput, {
    nullable: true
  })
  keywordCategories?: MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingUpdateManyWithoutMovieNestedInput, {
    nullable: true
  })
  ratedBy?: MovieRatingUpdateManyWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateManyWithoutMoviesNestedInput, {
    nullable: true
  })
  movieLists?: MovieListUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateManyWithoutWatchlistNestedInput, {
    nullable: true
  })
  inWatchlistByUsers?: MovifierAppUserUpdateManyWithoutWatchlistNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput, {
    nullable: true
  })
  spokenLanguages?: MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateManyWithoutMovieNestedInput, {
    nullable: true
  })
  watchedBy?: MovieWatchedByUserUpdateManyWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateManyWithoutMovieNestedInput, {
    nullable: true
  })
  likedBy?: MovieLikedByUserUpdateManyWithoutMovieNestedInput | undefined;
}
