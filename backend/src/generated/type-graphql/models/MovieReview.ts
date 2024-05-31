import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieRating } from "../models/MovieRating";
import { MovieReviewLikedByUser } from "../models/MovieReviewLikedByUser";
import { MovieReviewCount } from "../resolvers/outputs/MovieReviewCount";

@TypeGraphQL.ObjectType("MovieReview", {})
export class MovieReview {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ratingId!: string;

  rating?: MovieRating;

  likedBy?: MovieReviewLikedByUser[];

  @TypeGraphQL.Field(_type => MovieReviewCount, {
    nullable: true
  })
  _count?: MovieReviewCount | null;
}
