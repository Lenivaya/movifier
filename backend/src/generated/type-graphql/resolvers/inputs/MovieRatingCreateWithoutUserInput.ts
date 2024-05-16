import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutRatingsInput } from "../inputs/MovieCreateNestedOneWithoutRatingsInput";
import { MovieReviewCreateNestedOneWithoutRatingInput } from "../inputs/MovieReviewCreateNestedOneWithoutRatingInput";

@TypeGraphQL.InputType("MovieRatingCreateWithoutUserInput", {})
export class MovieRatingCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  rating!: number;

  @TypeGraphQL.Field((_type) => MovieReviewCreateNestedOneWithoutRatingInput, {
    nullable: true,
  })
  Review?: MovieReviewCreateNestedOneWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieCreateNestedOneWithoutRatingsInput, {
    nullable: false,
  })
  movie!: MovieCreateNestedOneWithoutRatingsInput;
}
