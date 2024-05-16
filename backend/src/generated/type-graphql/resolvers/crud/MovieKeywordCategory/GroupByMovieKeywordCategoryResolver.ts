import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieKeywordCategoryArgs } from "./args/GroupByMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import { MovieKeywordCategoryGroupBy } from "../../outputs/MovieKeywordCategoryGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class GroupByMovieKeywordCategoryResolver {
  @TypeGraphQL.Query((_returns) => [MovieKeywordCategoryGroupBy], {
    nullable: false,
  })
  async groupByMovieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieKeywordCategoryArgs)
    args: GroupByMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
