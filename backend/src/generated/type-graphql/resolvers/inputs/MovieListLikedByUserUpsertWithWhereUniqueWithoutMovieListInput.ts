import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateWithoutMovieListInput";
import { MovieListLikedByUserUpdateWithoutMovieListInput } from "../inputs/MovieListLikedByUserUpdateWithoutMovieListInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput", {})
export class MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateWithoutMovieListInput, {
    nullable: false
  })
  update!: MovieListLikedByUserUpdateWithoutMovieListInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateWithoutMovieListInput, {
    nullable: false
  })
  create!: MovieListLikedByUserCreateWithoutMovieListInput;
}
