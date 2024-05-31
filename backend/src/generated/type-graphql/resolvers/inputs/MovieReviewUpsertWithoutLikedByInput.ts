import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutLikedByInput } from "../inputs/MovieReviewCreateWithoutLikedByInput";
import { MovieReviewUpdateWithoutLikedByInput } from "../inputs/MovieReviewUpdateWithoutLikedByInput";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewUpsertWithoutLikedByInput", {})
export class MovieReviewUpsertWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutLikedByInput, {
    nullable: false
  })
  update!: MovieReviewUpdateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  where?: MovieReviewWhereInput | undefined;
}
