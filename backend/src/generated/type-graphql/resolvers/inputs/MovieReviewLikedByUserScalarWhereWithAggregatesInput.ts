import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieReviewLikedByUserScalarWhereWithAggregatesInput", {})
export class MovieReviewLikedByUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieReviewLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieReviewLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieReviewLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  movieReviewId?: StringWithAggregatesFilter | undefined;
}
