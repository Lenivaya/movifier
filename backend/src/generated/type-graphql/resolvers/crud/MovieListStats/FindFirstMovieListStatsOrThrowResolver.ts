import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieListStatsOrThrowArgs } from "./args/FindFirstMovieListStatsOrThrowArgs";
import { MovieListStats } from "@/generated/type-graphql/models/MovieListStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class FindFirstMovieListStatsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findFirstMovieListStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieListStatsOrThrowArgs)
    args: FindFirstMovieListStatsOrThrowArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
