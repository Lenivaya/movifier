import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GenreScalarWhereWithAggregatesInput", {})
export class GenreScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

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
