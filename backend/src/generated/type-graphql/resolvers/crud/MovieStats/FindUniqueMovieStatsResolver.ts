import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieStatsArgs } from "./args/FindUniqueMovieStatsArgs";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class FindUniqueMovieStatsResolver {
  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findUniqueMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieStatsArgs)
    args: FindUniqueMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
