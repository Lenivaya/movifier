import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryWhereUniqueInput } from "../../../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieKeywordCategoryOrThrowArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieKeywordCategoryWhereUniqueInput;
}
