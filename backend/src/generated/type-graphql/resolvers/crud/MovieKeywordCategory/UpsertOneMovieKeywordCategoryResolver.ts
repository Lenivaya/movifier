import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieKeywordCategoryArgs } from "./args/UpsertOneMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieKeywordCategory)
export class UpsertOneMovieKeywordCategoryResolver {
  @TypeGraphQL.Mutation(_returns => MovieKeywordCategory, {
    nullable: false
  })
  async upsertOneMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieKeywordCategoryArgs) args: UpsertOneMovieKeywordCategoryArgs): Promise<MovieKeywordCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieKeywordCategory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
