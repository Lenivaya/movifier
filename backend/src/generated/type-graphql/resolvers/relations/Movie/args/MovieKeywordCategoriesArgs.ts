import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput";
import { MovieKeywordCategoryWhereInput } from "../../../inputs/MovieKeywordCategoryWhereInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../../../inputs/MovieKeywordCategoryWhereUniqueInput";
import { MovieKeywordCategoryScalarFieldEnum } from "../../../../enums/MovieKeywordCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MovieKeywordCategoriesArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  where?: MovieKeywordCategoryWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?:
    | MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieKeywordCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "name"> | undefined;
}
