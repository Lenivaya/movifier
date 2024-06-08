import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieSpokenLanguageScalarWhereWithAggregatesInput", {})
export class MovieSpokenLanguageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieSpokenLanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieSpokenLanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieSpokenLanguageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  iso_639_1?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
