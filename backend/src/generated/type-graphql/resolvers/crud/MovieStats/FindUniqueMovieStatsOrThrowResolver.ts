import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieStatsOrThrowArgs } from "./args/FindUniqueMovieStatsOrThrowArgs";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieStats)
export class FindUniqueMovieStatsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieStats, {
    nullable: true,
  })
  async findUniqueMovieStatsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindUniqueMovieStatsOrThrowArgs)
    args: FindUniqueMovieStatsOrThrowArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
