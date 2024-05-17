import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryOrderByWithAggregationInput } from "../../../inputs/MovieKeywordCategoryOrderByWithAggregationInput";
import { MovieKeywordCategoryScalarWhereWithAggregatesInput } from "../../../inputs/MovieKeywordCategoryScalarWhereWithAggregatesInput";
import { MovieKeywordCategoryWhereInput } from "../../../inputs/MovieKeywordCategoryWhereInput";
import { MovieKeywordCategoryScalarFieldEnum } from "../../../../enums/MovieKeywordCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieKeywordCategoryArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  where?: MovieKeywordCategoryWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryOrderByWithAggregationInput],
    {
      nullable: true,
    },
  )
  orderBy?: MovieKeywordCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(
    (_type) => MovieKeywordCategoryScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: MovieKeywordCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
