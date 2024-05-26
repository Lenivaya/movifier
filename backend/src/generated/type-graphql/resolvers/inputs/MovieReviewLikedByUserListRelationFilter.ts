import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserWhereInput } from "../inputs/MovieReviewLikedByUserWhereInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserListRelationFilter", {})
export class MovieReviewLikedByUserListRelationFilter {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  every?: MovieReviewLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  some?: MovieReviewLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  none?: MovieReviewLikedByUserWhereInput | undefined;
}
