import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieKeywordCategoryArgs } from "./args/UpdateOneMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieKeywordCategory)
export class UpdateOneMovieKeywordCategoryResolver {
  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: true
  })
  async updateOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
