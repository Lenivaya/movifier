import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateWithoutMovieInput";
import { MovieWatchedByUserUpdateWithoutMovieInput } from "../inputs/MovieWatchedByUserUpdateWithoutMovieInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput", {})
export class MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWatchedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: MovieWatchedByUserUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieWatchedByUserCreateWithoutMovieInput;
}
