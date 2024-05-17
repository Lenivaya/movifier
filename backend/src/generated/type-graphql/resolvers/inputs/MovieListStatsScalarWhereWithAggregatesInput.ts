import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieListStatsScalarWhereWithAggregatesInput", {})
export class MovieListStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovieListStatsScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovieListStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListStatsScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovieListStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListStatsScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovieListStatsScalarWhereWithAggregatesInput[] | undefined;

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
  views?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  likes?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  movieListId?: StringWithAggregatesFilter | undefined;
}
