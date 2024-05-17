import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingUpdateWithoutReviewInput } from "../inputs/MovieRatingUpdateWithoutReviewInput";
import { MovieRatingWhereInput } from "../inputs/MovieRatingWhereInput";

@TypeGraphQL.InputType("MovieRatingUpdateToOneWithWhereWithoutReviewInput", {})
export class MovieRatingUpdateToOneWithWhereWithoutReviewInput {
  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  where?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingUpdateWithoutReviewInput, {
    nullable: false,
  })
  data!: MovieRatingUpdateWithoutReviewInput;
}
