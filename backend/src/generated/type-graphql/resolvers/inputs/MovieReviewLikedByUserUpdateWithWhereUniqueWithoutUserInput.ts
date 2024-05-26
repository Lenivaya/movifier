import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserUpdateWithoutUserInput } from "../inputs/MovieReviewLikedByUserUpdateWithoutUserInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput", {})
export class MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieReviewLikedByUserUpdateWithoutUserInput;
}
