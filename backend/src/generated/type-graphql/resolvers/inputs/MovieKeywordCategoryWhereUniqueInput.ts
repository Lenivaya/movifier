import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryWhereInput } from "../inputs/MovieKeywordCategoryWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieKeywordCategoryWhereUniqueInput", {})
export class MovieKeywordCategoryWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereInput], {
    nullable: true,
  })
  AND?: MovieKeywordCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereInput], {
    nullable: true,
  })
  OR?: MovieKeywordCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereInput], {
    nullable: true,
  })
  NOT?: MovieKeywordCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movies?: MovieListRelationFilter | undefined;
}
