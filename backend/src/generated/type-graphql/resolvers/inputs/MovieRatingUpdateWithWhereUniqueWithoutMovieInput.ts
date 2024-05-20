import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingUpdateWithoutMovieInput } from "../inputs/MovieRatingUpdateWithoutMovieInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpdateWithWhereUniqueWithoutMovieInput", {})
export class MovieRatingUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieRatingUpdateWithoutMovieInput;
}
