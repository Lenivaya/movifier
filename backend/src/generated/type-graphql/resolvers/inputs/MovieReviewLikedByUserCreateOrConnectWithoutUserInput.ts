import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateWithoutUserInput } from "../inputs/MovieReviewLikedByUserCreateWithoutUserInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserCreateOrConnectWithoutUserInput", {})
export class MovieReviewLikedByUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewLikedByUserCreateWithoutUserInput;
}
