import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieListStatsArgs } from "./args/FindUniqueMovieListStatsArgs";
import { MovieListStats } from "../../../models/MovieListStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListStats)
export class FindUniqueMovieListStatsResolver {
  @TypeGraphQL.Query(_returns => MovieListStats, {
    nullable: true
  })
  async findUniqueMovieListStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieListStatsArgs) args: FindUniqueMovieListStatsArgs): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
