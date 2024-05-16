import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieKeywordCategoryOrThrowArgs } from "./args/FindUniqueMovieKeywordCategoryOrThrowArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class FindUniqueMovieKeywordCategoryOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieKeywordCategory, {
    nullable: true,
  })
  async getMovieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieKeywordCategoryOrThrowArgs)
    args: FindUniqueMovieKeywordCategoryOrThrowArgs,
  ): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
