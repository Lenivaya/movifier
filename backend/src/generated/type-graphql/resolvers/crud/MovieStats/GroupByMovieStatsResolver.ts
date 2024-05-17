import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieStatsArgs } from "./args/GroupByMovieStatsArgs";
import { MovieStats } from "../../../models/MovieStats";
import { MovieStatsGroupBy } from "../../outputs/MovieStatsGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class GroupByMovieStatsResolver {
  @TypeGraphQL.Query((_returns) => [MovieStatsGroupBy], {
    nullable: false,
  })
  async groupByMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieStatsArgs)
    args: GroupByMovieStatsArgs,
  ): Promise<MovieStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
