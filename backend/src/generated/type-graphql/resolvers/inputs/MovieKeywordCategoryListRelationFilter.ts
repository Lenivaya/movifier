import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryWhereInput } from "../inputs/MovieKeywordCategoryWhereInput";

@TypeGraphQL.InputType("MovieKeywordCategoryListRelationFilter", {})
export class MovieKeywordCategoryListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  every?: MovieKeywordCategoryWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  some?: MovieKeywordCategoryWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  none?: MovieKeywordCategoryWhereInput | undefined;
}
