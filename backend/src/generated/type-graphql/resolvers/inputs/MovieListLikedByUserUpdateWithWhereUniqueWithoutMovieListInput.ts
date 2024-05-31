import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserUpdateWithoutMovieListInput } from "../inputs/MovieListLikedByUserUpdateWithoutMovieListInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput", {})
export class MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateWithoutMovieListInput, {
    nullable: false
  })
  data!: MovieListLikedByUserUpdateWithoutMovieListInput;
}
