import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieStudioScalarWhereWithAggregatesInput", {})
export class MovieStudioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieStudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieStudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieStudioScalarWhereWithAggregatesInput[] | undefined;

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
}
