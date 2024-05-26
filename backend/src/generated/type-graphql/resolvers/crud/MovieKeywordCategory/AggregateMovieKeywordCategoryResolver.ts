import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieKeywordCategoryArgs } from "./args/AggregateMovieKeywordCategoryArgs";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { AggregateMovieKeywordCategory } from "../../outputs/AggregateMovieKeywordCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieKeywordCategory)
export class AggregateMovieKeywordCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieKeywordCategory, {
    nullable: false
  })
  async aggregateMovieKeywordCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieKeywordCategoryArgs): Promise<AggregateMovieKeywordCategory> {
    return getPrismaFromContext(ctx).movieKeywordCategory.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
