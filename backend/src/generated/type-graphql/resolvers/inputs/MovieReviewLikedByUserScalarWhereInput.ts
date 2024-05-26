import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieReviewLikedByUserScalarWhereInput", {})
export class MovieReviewLikedByUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereInput], {
    nullable: true
  })
  AND?: MovieReviewLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereInput], {
    nullable: true
  })
  OR?: MovieReviewLikedByUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewLikedByUserScalarWhereInput[] | undefined;

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
}
