import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieRatingScalarWhereWithAggregatesInput", {})
export class MovieRatingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MovieRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MovieRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MovieRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  movieId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;
}
