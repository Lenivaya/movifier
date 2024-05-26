import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput";
import { MovifierAppUserCreateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateWithoutLikedMovieReviewsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput", {})
export class MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;
}
