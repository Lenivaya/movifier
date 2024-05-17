import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieKeywordCategoryWhereInput", {})
export class MovieKeywordCategoryWhereInput {
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
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieListRelationFilter, {
    nullable: true,
  })
  movies?: MovieListRelationFilter | undefined;
}
