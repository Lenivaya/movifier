import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieReviewLikedByUserArgs } from "./args/GroupByMovieReviewLikedByUserArgs";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { MovieReviewLikedByUserGroupBy } from "../../outputs/MovieReviewLikedByUserGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class GroupByMovieReviewLikedByUserResolver {
  @TypeGraphQL.Query(_returns => [MovieReviewLikedByUserGroupBy], {
    nullable: false
  })
  async groupByMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
