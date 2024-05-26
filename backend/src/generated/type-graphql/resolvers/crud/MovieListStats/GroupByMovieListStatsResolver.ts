import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieListStatsArgs } from "./args/GroupByMovieListStatsArgs";
import { MovieListStats } from "../../../models/MovieListStats";
import { MovieListStatsGroupBy } from "../../outputs/MovieListStatsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListStats)
export class GroupByMovieListStatsResolver {
  @TypeGraphQL.Query(_returns => [MovieListStatsGroupBy], {
    nullable: false
  })
  async groupByMovieListStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieListStatsArgs): Promise<MovieListStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
