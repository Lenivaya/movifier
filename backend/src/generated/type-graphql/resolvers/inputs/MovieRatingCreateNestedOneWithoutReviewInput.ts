import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateOrConnectWithoutReviewInput } from "../inputs/MovieRatingCreateOrConnectWithoutReviewInput";
import { MovieRatingCreateWithoutReviewInput } from "../inputs/MovieRatingCreateWithoutReviewInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateNestedOneWithoutReviewInput", {})
export class MovieRatingCreateNestedOneWithoutReviewInput {
  @TypeGraphQL.Field((_type) => MovieRatingCreateWithoutReviewInput, {
    nullable: true,
  })
  create?: MovieRatingCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingCreateOrConnectWithoutReviewInput, {
    nullable: true,
  })
  connectOrCreate?: MovieRatingCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieRatingWhereUniqueInput | undefined;
}
