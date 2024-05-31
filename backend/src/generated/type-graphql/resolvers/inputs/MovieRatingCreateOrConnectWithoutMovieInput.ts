import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutMovieInput } from "../inputs/MovieRatingCreateWithoutMovieInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateOrConnectWithoutMovieInput", {})
export class MovieRatingCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieRatingCreateWithoutMovieInput;
}
