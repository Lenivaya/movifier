import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryCreateManyInput } from "../../../inputs/MovieKeywordCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieKeywordCategoryArgs {
  @TypeGraphQL.Field(_type => [MovieKeywordCategoryCreateManyInput], {
    nullable: false
  })
  data!: MovieKeywordCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
