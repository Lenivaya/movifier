import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieKeywordCategoryArgs } from "./args/FindUniqueMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class FindUniqueMovieKeywordCategoryResolver {
  @TypeGraphQL.Query((_returns) => MovieKeywordCategory, {
    nullable: true,
  })
  async movieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieKeywordCategoryArgs)
    args: FindUniqueMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
