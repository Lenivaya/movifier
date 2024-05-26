import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput } from "../inputs/MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput";
import { MovieReviewLikedByUserWhereInput } from "../inputs/MovieReviewLikedByUserWhereInput";
import { MovieReviewRelationFilter } from "../inputs/MovieReviewRelationFilter";
import { MovifierAppUserRelationFilter } from "../inputs/MovifierAppUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieReviewLikedByUserWhereUniqueInput", {})
export class MovieReviewLikedByUserWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieReviewId?: MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereInput], {
    nullable: true
  })
  AND?: MovieReviewLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereInput], {
    nullable: true
  })
  OR?: MovieReviewLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewLikedByUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  movieReviewId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewRelationFilter, {
    nullable: true
  })
  movieReview?: MovieReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserRelationFilter, {
    nullable: true
  })
  user?: MovifierAppUserRelationFilter | undefined;
}
