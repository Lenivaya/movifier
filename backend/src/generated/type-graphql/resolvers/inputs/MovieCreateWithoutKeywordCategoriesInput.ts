import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput";
import { MovieInfoCreateNestedOneWithoutMovieInput } from "../inputs/MovieInfoCreateNestedOneWithoutMovieInput";
import { MovieLikedByUserCreateNestedManyWithoutMovieInput } from "../inputs/MovieLikedByUserCreateNestedManyWithoutMovieInput";
import { MovieListCreateNestedManyWithoutMoviesInput } from "../inputs/MovieListCreateNestedManyWithoutMoviesInput";
import { MovieRatingCreateNestedManyWithoutMovieInput } from "../inputs/MovieRatingCreateNestedManyWithoutMovieInput";
import { MovieSpokenLanguageCreateNestedManyWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateNestedManyWithoutMoviesInput";
import { MovieStatsCreateNestedOneWithoutMovieInput } from "../inputs/MovieStatsCreateNestedOneWithoutMovieInput";
import { MovieStudioCreateNestedManyWithoutMoviesInput } from "../inputs/MovieStudioCreateNestedManyWithoutMoviesInput";
import { MovieWatchedByUserCreateNestedManyWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateNestedManyWithoutMovieInput";
import { UserMovieWatchlistCreateNestedManyWithoutMovieInput } from "../inputs/UserMovieWatchlistCreateNestedManyWithoutMovieInput";

@TypeGraphQL.InputType("MovieCreateWithoutKeywordCategoriesInput", {})
export class MovieCreateWithoutKeywordCategoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieInfoCreateNestedOneWithoutMovieInput, {
    nullable: true
  })
  movieInfo?: MovieInfoCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieStatsCreateNestedOneWithoutMovieInput, {
    nullable: true
  })
  movieStats?: MovieStatsCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  crewMembers?: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieStudioCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  studios?: MovieStudioCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  ratedBy?: MovieRatingCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  movieLists?: MovieListCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  spokenLanguages?: MovieSpokenLanguageCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  watchedBy?: MovieWatchedByUserCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  likedBy?: MovieLikedByUserCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  inWatchlistByUsers?: UserMovieWatchlistCreateNestedManyWithoutMovieInput | undefined;
}
