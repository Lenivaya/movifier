import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryWhereInput } from "../../../inputs/MovieKeywordCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieKeywordCategoryArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  where?: MovieKeywordCategoryWhereInput | undefined;
}
