import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieReviewLikedByUserCreateManyUserInputEnvelope";
import { MovieReviewLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateOrConnectWithoutUserInput";
import { MovieReviewLikedByUserCreateWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateWithoutUserInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateNestedManyWithoutUserInput", {})
export class MovieReviewLikedByUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;
}
