import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieKeywordCategoryArgs } from "./args/DeleteOneMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieKeywordCategory)
export class DeleteOneMovieKeywordCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => MovieKeywordCategory, {
    nullable: true,
  })
  async deleteOneMovieKeywordCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieKeywordCategoryArgs)
    args: DeleteOneMovieKeywordCategoryArgs,
  ): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
