import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieKeywordCategoryArgs } from "./args/FindFirstMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class FindFirstMovieKeywordCategoryResolver {
  @TypeGraphQL.Query((_returns) => MovieKeywordCategory, {
    nullable: true,
  })
  async findFirstMovieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieKeywordCategoryArgs)
    args: FindFirstMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
