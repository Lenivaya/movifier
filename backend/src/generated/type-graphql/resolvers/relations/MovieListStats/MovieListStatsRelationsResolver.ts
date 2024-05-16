import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieList } from "@/generated/type-graphql/models/MovieList";
import { MovieListStats } from "@/generated/type-graphql/models/MovieListStats";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListStats)
export class MovieListStatsRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => MovieList, {
    nullable: false,
  })
  async MovieList(
    @TypeGraphQL.Root() movieListStats: MovieListStats,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<MovieList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieListStats.findUniqueOrThrow({
        where: {
          id: movieListStats.id,
        },
      })
      .MovieList({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
