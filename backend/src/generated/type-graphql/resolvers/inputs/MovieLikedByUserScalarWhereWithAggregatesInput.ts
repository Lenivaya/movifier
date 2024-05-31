import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieLikedByUserScalarWhereWithAggregatesInput", {})
export class MovieLikedByUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieLikedByUserScalarWhereWithAggregatesInput[] | undefined;

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
