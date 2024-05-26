import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutLikedByInput } from "../inputs/MovieReviewCreateWithoutLikedByInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateOrConnectWithoutLikedByInput", {})
export class MovieReviewCreateOrConnectWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutLikedByInput;
}
