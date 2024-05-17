import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieStatsArgs } from "./args/AggregateMovieStatsArgs";
import { MovieStats } from "../../../models/MovieStats";
import { AggregateMovieStats } from "../../outputs/AggregateMovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class AggregateMovieStatsResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieStats, {
    nullable: false,
  })
  async aggregateMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieStatsArgs)
    args: AggregateMovieStatsArgs,
  ): Promise<AggregateMovieStats> {
    return getPrismaFromContext(ctx).movieStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
