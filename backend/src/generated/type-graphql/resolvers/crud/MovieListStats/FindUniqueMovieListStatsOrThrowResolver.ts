import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieListStatsOrThrowArgs } from "./args/FindUniqueMovieListStatsOrThrowArgs";
import { MovieListStats } from "@/generated/type-graphql/models/MovieListStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class FindUniqueMovieListStatsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieListStats, {
    nullable: true,
  })
  async findUniqueMovieListStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieListStatsOrThrowArgs)
    args: FindUniqueMovieListStatsOrThrowArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
