import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateOrConnectWithoutRatingInput } from "../inputs/MovieReviewCreateOrConnectWithoutRatingInput";
import { MovieReviewCreateWithoutRatingInput } from "../inputs/MovieReviewCreateWithoutRatingInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateNestedOneWithoutRatingInput", {})
export class MovieReviewCreateNestedOneWithoutRatingInput {
  @TypeGraphQL.Field((_type) => MovieReviewCreateWithoutRatingInput, {
    nullable: true,
  })
  create?: MovieReviewCreateWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewCreateOrConnectWithoutRatingInput, {
    nullable: true,
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieReviewWhereUniqueInput | undefined;
}
