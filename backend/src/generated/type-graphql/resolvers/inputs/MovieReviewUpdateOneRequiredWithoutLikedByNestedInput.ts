import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateOrConnectWithoutLikedByInput } from "../inputs/MovieReviewCreateOrConnectWithoutLikedByInput";
import { MovieReviewCreateWithoutLikedByInput } from "../inputs/MovieReviewCreateWithoutLikedByInput";
import { MovieReviewUpdateToOneWithWhereWithoutLikedByInput } from "../inputs/MovieReviewUpdateToOneWithWhereWithoutLikedByInput";
import { MovieReviewUpsertWithoutLikedByInput } from "../inputs/MovieReviewUpsertWithoutLikedByInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateOneRequiredWithoutLikedByNestedInput", {})
export class MovieReviewUpdateOneRequiredWithoutLikedByNestedInput {
  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikedByInput, {
    nullable: true
  })
  create?: MovieReviewCreateWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateOrConnectWithoutLikedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpsertWithoutLikedByInput, {
    nullable: true
  })
  upsert?: MovieReviewUpsertWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateToOneWithWhereWithoutLikedByInput, {
    nullable: true
  })
  update?: MovieReviewUpdateToOneWithWhereWithoutLikedByInput | undefined;
}
