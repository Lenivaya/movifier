import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutMovieInput } from "../inputs/MovieRatingCreateWithoutMovieInput";
import { MovieRatingUpdateWithoutMovieInput } from "../inputs/MovieRatingUpdateWithoutMovieInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpsertWithWhereUniqueWithoutMovieInput", {})
export class MovieRatingUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: MovieRatingUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => MovieRatingCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieRatingCreateWithoutMovieInput;
}
