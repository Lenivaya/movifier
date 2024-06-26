import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateNestedManyWithoutUserInput } from "../inputs/MovieLikedByUserCreateNestedManyWithoutUserInput";
import { MovieListCommentCreateNestedManyWithoutUserInput } from "../inputs/MovieListCommentCreateNestedManyWithoutUserInput";
import { MovieListCreateNestedManyWithoutMovieListAuthorInput } from "../inputs/MovieListCreateNestedManyWithoutMovieListAuthorInput";
import { MovieListLikedByUserCreateNestedManyWithoutUserInput } from "../inputs/MovieListLikedByUserCreateNestedManyWithoutUserInput";
import { MovieRatingCreateNestedManyWithoutUserInput } from "../inputs/MovieRatingCreateNestedManyWithoutUserInput";
import { MovieReviewLikedByUserCreateNestedManyWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateNestedManyWithoutUserInput";
import { UserMovieWatchlistCreateNestedManyWithoutUserInput } from "../inputs/UserMovieWatchlistCreateNestedManyWithoutUserInput";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType("MovifierAppUserCreateWithoutWatchedMoviesInput", {})
export class MovifierAppUserCreateWithoutWatchedMoviesInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MoviefireAppUserRole, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  watchlist?: UserMovieWatchlistCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieRatingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ratedMovies?: MovieRatingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedMovies?: MovieLikedByUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateNestedManyWithoutMovieListAuthorInput, {
    nullable: true
  })
  movieLists?: MovieListCreateNestedManyWithoutMovieListAuthorInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  movieListsComments?: MovieListCommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikedByUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  MovieListLikedByUser?: MovieListLikedByUserCreateNestedManyWithoutUserInput | undefined;
}
