import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserMovieWatchlistScalarWhereWithAggregatesInput", {})
export class UserMovieWatchlistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserMovieWatchlistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserMovieWatchlistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserMovieWatchlistScalarWhereWithAggregatesInput[] | undefined;

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
