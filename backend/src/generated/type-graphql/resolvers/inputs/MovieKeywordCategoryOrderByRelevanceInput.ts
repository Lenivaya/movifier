import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryOrderByRelevanceFieldEnum } from "../../enums/MovieKeywordCategoryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieKeywordCategoryOrderByRelevanceInput", {})
export class MovieKeywordCategoryOrderByRelevanceInput {
  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryOrderByRelevanceFieldEnum],
    {
      nullable: false,
    },
  )
  fields!: Array<"id" | "name">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
