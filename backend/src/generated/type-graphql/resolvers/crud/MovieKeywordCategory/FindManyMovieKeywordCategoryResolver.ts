import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieKeywordCategoryArgs } from "./args/FindManyMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class FindManyMovieKeywordCategoryResolver {
  @TypeGraphQL.Query((_returns) => [MovieKeywordCategory], {
    nullable: false,
  })
  async movieKeywordCategories(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieKeywordCategoryArgs)
    args: FindManyMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
