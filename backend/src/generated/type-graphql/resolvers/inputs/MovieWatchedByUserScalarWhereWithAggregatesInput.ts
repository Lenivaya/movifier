import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieWatchedByUserScalarWhereWithAggregatesInput", {})
export class MovieWatchedByUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieWatchedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieWatchedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieWatchedByUserScalarWhereWithAggregatesInput[] | undefined;

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
  movieId?: StringWithAggregatesFilter | undefined;
}
