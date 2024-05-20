import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingScalarWhereInput } from "../inputs/MovieRatingScalarWhereInput";
import { MovieRatingUpdateManyMutationInput } from "../inputs/MovieRatingUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieRatingUpdateManyWithWhereWithoutMovieInput", {})
export class MovieRatingUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieRatingScalarWhereInput, {
    nullable: false
  })
  where!: MovieRatingScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieRatingUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieRatingUpdateManyMutationInput;
}
