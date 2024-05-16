import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieStatsArgs } from "./args/FindFirstMovieStatsArgs";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class FindFirstMovieStatsResolver {
  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findFirstMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieStatsArgs)
    args: FindFirstMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
