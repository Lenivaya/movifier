import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieListLikedByUserScalarWhereWithAggregatesInput", {})
export class MovieListLikedByUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieListLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieListLikedByUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieListLikedByUserScalarWhereWithAggregatesInput[] | undefined;

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
  movieListId?: StringWithAggregatesFilter | undefined;
}
