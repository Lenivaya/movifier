import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieReviewLikedByUserCreateManyUserInputEnvelope";
import { MovieReviewLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateOrConnectWithoutUserInput";
import { MovieReviewLikedByUserCreateWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateWithoutUserInput";
import { MovieReviewLikedByUserScalarWhereInput } from "../inputs/MovieReviewLikedByUserScalarWhereInput";
import { MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput";
import { MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput";
import { MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateManyWithoutUserNestedInput", {})
export class MovieReviewLikedByUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewLikedByUserScalarWhereInput[] | undefined;
}
