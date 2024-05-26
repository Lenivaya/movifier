import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieListStatsArgs } from "./args/AggregateMovieListStatsArgs";
import { MovieListStats } from "../../../models/MovieListStats";
import { AggregateMovieListStats } from "../../outputs/AggregateMovieListStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListStats)
export class AggregateMovieListStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieListStats, {
    nullable: false
  })
  async aggregateMovieListStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieListStatsArgs): Promise<AggregateMovieListStats> {
    return getPrismaFromContext(ctx).movieListStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
