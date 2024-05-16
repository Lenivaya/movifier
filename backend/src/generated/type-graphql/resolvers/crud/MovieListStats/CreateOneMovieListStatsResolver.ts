import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieListStatsArgs } from "./args/CreateOneMovieListStatsArgs";
import { MovieListStats } from "@/generated/type-graphql/models/MovieListStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class CreateOneMovieListStatsResolver {
  @TypeGraphQL.Mutation((_returns) => MovieListStats, {
    nullable: false,
  })
  async createOneMovieListStats(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieListStatsArgs)
    args: CreateOneMovieListStatsArgs,
  ): Promise<MovieListStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListStats.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
