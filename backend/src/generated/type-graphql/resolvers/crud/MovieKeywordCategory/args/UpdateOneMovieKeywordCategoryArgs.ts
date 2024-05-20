import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryUpdateInput } from "../../../inputs/MovieKeywordCategoryUpdateInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../../../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieKeywordCategoryArgs {
  @TypeGraphQL.Field(_type => MovieKeywordCategoryUpdateInput, {
    nullable: false
  })
  data!: MovieKeywordCategoryUpdateInput;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MovieKeywordCategoryWhereUniqueInput;
}
