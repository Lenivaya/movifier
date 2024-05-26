import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateWithoutLikedMovieReviewsInput";
import { MovifierAppUserUpdateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserUpdateWithoutLikedMovieReviewsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpsertWithoutLikedMovieReviewsInput", {})
export class MovifierAppUserUpsertWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  update!: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutLikedMovieReviewsInput;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
