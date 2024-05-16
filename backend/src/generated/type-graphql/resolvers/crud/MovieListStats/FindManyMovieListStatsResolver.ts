import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieListStatsArgs } from "./args/FindManyMovieListStatsArgs";
import { MovieListStats } from "@/generated/type-graphql/models/MovieListStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class FindManyMovieListStatsResolver {
  @TypeGraphQL.Query((_returns) => [MovieListStats], {
    nullable: false,
  })
  async findManyMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieListStatsArgs)
    args: FindManyMovieListStatsArgs,
  ): Promise<MovieListStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
