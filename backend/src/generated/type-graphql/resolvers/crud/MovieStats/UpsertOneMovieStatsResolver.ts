import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieStatsArgs } from "./args/UpsertOneMovieStatsArgs";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class UpsertOneMovieStatsResolver {
  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: false,
  })
  async upsertOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpsertOneMovieStatsArgs)
    args: UpsertOneMovieStatsArgs,
  ): Promise<MovieStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
