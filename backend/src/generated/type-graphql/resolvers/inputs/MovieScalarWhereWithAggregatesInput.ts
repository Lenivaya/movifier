import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieScalarWhereWithAggregatesInput", {})
export class MovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieScalarWhereWithAggregatesInput[] | undefined;

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
}
