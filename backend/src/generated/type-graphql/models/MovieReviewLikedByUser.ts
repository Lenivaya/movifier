import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieReview } from "../models/MovieReview";
import { MovifierAppUser } from "../models/MovifierAppUser";

@TypeGraphQL.ObjectType("MovieReviewLikedByUser", {})
export class MovieReviewLikedByUser {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieReviewId!: string;

  movieReview?: MovieReview;

  user?: MovifierAppUser;
}
