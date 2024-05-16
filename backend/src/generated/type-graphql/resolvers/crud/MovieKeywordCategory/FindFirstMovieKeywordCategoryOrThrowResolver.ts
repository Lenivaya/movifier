import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieKeywordCategoryOrThrowArgs } from "./args/FindFirstMovieKeywordCategoryOrThrowArgs";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class FindFirstMovieKeywordCategoryOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieKeywordCategory, {
    nullable: true,
  })
  async findFirstMovieKeywordCategoryOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieKeywordCategoryOrThrowArgs)
    args: FindFirstMovieKeywordCategoryOrThrowArgs,
  ): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
