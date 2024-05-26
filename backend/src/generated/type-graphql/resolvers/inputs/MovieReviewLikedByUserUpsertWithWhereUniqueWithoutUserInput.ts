import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateWithoutUserInput";
import { MovieReviewLikedByUserUpdateWithoutUserInput } from "../inputs/MovieReviewLikedByUserUpdateWithoutUserInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput", {})
export class MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieReviewLikedByUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewLikedByUserCreateWithoutUserInput;
}
