import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateWithoutReviewInput } from "../inputs/MovieRatingCreateWithoutReviewInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateOrConnectWithoutReviewInput", {})
export class MovieRatingCreateOrConnectWithoutReviewInput {
  @TypeGraphQL.Field(_type => MovieRatingWhereUniqueInput, {
    nullable: false
  })
  where!: MovieRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieRatingCreateWithoutReviewInput, {
    nullable: false
  })
  create!: MovieRatingCreateWithoutReviewInput;
}
