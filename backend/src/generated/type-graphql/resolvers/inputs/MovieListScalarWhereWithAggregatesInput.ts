import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieListScalarWhereWithAggregatesInput", {})
export class MovieListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieListScalarWhereWithAggregatesInput[] | undefined;

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
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
