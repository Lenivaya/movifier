import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieListStatsArgs } from "./args/FindFirstMovieListStatsArgs";
import { MovieListStats } from "../../../models/MovieListStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListStats)
export class FindFirstMovieListStatsResolver {
  @TypeGraphQL.Query(_returns => MovieListStats, {
    nullable: true
  })
  async findFirstMovieListStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieListStatsArgs): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
