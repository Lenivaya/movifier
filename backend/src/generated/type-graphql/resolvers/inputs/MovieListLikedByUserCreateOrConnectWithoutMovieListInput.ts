import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateWithoutMovieListInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateOrConnectWithoutMovieListInput", {})
export class MovieListLikedByUserCreateOrConnectWithoutMovieListInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateWithoutMovieListInput, {
    nullable: false
  })
  create!: MovieListLikedByUserCreateWithoutMovieListInput;
}
