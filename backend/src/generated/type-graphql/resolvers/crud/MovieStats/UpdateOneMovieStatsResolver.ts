import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieStatsArgs } from "./args/UpdateOneMovieStatsArgs";
import { MovieStats } from "../../../models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class UpdateOneMovieStatsResolver {
  @TypeGraphQL.Mutation((_returns) => MovieStats, {
    nullable: true,
  })
  async updateOneMovieStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieStatsArgs)
    args: UpdateOneMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
