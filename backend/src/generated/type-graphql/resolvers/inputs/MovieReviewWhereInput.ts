import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieRatingRelationFilter } from "../inputs/MovieRatingRelationFilter";
import { MovieReviewLikedByUserListRelationFilter } from "../inputs/MovieReviewLikedByUserListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieReviewWhereInput", {})
export class MovieReviewWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  AND?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  OR?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ratingId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRatingRelationFilter, {
    nullable: true
  })
  rating?: MovieRatingRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserListRelationFilter, {
    nullable: true
  })
  likedBy?: MovieReviewLikedByUserListRelationFilter | undefined;
}
