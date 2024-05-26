import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateWithoutMovieInput } from "../inputs/MovieLikedByUserCreateWithoutMovieInput";
import { MovieLikedByUserUpdateWithoutMovieInput } from "../inputs/MovieLikedByUserUpdateWithoutMovieInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput", {})
export class MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: MovieLikedByUserUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieLikedByUserCreateWithoutMovieInput;
}
