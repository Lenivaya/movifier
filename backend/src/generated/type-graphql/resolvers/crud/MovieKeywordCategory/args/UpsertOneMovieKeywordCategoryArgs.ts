import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryCreateInput } from "../../../inputs/MovieKeywordCategoryCreateInput";
import { MovieKeywordCategoryUpdateInput } from "../../../inputs/MovieKeywordCategoryUpdateInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../../../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieKeywordCategoryArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieKeywordCategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryCreateInput, {
    nullable: false,
  })
  create!: MovieKeywordCategoryCreateInput;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryUpdateInput, {
    nullable: false,
  })
  update!: MovieKeywordCategoryUpdateInput;
}
