import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateOrConnectWithoutRatingInput } from "../inputs/MovieReviewCreateOrConnectWithoutRatingInput";
import { MovieReviewCreateWithoutRatingInput } from "../inputs/MovieReviewCreateWithoutRatingInput";
import { MovieReviewUpdateToOneWithWhereWithoutRatingInput } from "../inputs/MovieReviewUpdateToOneWithWhereWithoutRatingInput";
import { MovieReviewUpsertWithoutRatingInput } from "../inputs/MovieReviewUpsertWithoutRatingInput";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateOneWithoutRatingNestedInput", {})
export class MovieReviewUpdateOneWithoutRatingNestedInput {
  @TypeGraphQL.Field((_type) => MovieReviewCreateWithoutRatingInput, {
    nullable: true,
  })
  create?: MovieReviewCreateWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewCreateOrConnectWithoutRatingInput, {
    nullable: true,
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewUpsertWithoutRatingInput, {
    nullable: true,
  })
  upsert?: MovieReviewUpsertWithoutRatingInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  disconnect?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  delete?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieReviewUpdateToOneWithWhereWithoutRatingInput,
    {
      nullable: true,
    },
  )
  update?: MovieReviewUpdateToOneWithWhereWithoutRatingInput | undefined;
}
