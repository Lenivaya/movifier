import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieListStatsArgs } from "./args/UpsertOneMovieListStatsArgs";
import { MovieListStats } from "../../../models/MovieListStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListStats)
export class UpsertOneMovieListStatsResolver {
  @TypeGraphQL.Mutation(_returns => MovieListStats, {
    nullable: false
  })
  async upsertOneMovieListStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneMovieListStatsArgs) args: UpsertOneMovieListStatsArgs): Promise<MovieListStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
