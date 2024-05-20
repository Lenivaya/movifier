import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryCreateInput } from "../../../inputs/MovieKeywordCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieKeywordCategoryArgs {
  @TypeGraphQL.Field(_type => MovieKeywordCategoryCreateInput, {
    nullable: false
  })
  data!: MovieKeywordCategoryCreateInput;
}
