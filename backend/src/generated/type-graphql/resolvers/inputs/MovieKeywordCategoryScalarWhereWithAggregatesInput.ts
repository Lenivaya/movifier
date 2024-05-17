import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MovieKeywordCategoryScalarWhereWithAggregatesInput", {})
export class MovieKeywordCategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  AND?: MovieKeywordCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  OR?: MovieKeywordCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryScalarWhereWithAggregatesInput],
    {
      nullable: true,
    },
  )
  NOT?: MovieKeywordCategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;
}
