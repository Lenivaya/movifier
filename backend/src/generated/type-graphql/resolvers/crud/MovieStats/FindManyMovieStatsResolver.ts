import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieStatsArgs } from "./args/FindManyMovieStatsArgs";
import { MovieStats } from "../../../models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class FindManyMovieStatsResolver {
  @TypeGraphQL.Query((_returns) => [MovieStats], {
    nullable: false,
  })
  async findManyMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieStatsArgs)
    args: FindManyMovieStatsArgs,
  ): Promise<MovieStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
