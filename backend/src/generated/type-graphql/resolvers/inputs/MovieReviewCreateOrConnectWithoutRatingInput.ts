import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutRatingInput } from "../inputs/MovieReviewCreateWithoutRatingInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateOrConnectWithoutRatingInput", {})
export class MovieReviewCreateOrConnectWithoutRatingInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutRatingInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutRatingInput;
}
