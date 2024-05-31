import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput";
import { MovifierAppUserCreateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateWithoutLikedMovieReviewsInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput";
import { MovifierAppUserUpsertWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserUpsertWithoutLikedMovieReviewsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput | undefined;
}
