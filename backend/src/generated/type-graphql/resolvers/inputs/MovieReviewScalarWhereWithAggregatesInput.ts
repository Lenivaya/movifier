import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieReviewScalarWhereWithAggregatesInput", {})
export class MovieReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ratingId?: StringWithAggregatesFilter | undefined;
}
