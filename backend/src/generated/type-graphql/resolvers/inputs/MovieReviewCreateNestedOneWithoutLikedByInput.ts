import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateOrConnectWithoutLikedByInput } from "../inputs/MovieReviewCreateOrConnectWithoutLikedByInput";
import { MovieReviewCreateWithoutLikedByInput } from "../inputs/MovieReviewCreateWithoutLikedByInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateNestedOneWithoutLikedByInput", {})
export class MovieReviewCreateNestedOneWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikedByInput, {
    nullable: true
  })
  create?: MovieReviewCreateWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateOrConnectWithoutLikedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput | undefined;
}
