import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryUpdateManyMutationInput } from "../../../inputs/MovieKeywordCategoryUpdateManyMutationInput";
import { MovieKeywordCategoryWhereInput } from "../../../inputs/MovieKeywordCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieKeywordCategoryArgs {
  @TypeGraphQL.Field(_type => MovieKeywordCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieKeywordCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryWhereInput, {
    nullable: true
  })
  where?: MovieKeywordCategoryWhereInput | undefined;
}
