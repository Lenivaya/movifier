import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieListArgs } from "./args/GroupByMovieListArgs";
import { MovieList } from "@/generated/type-graphql/models/MovieList";
import { MovieListGroupBy } from "../../outputs/MovieListGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieList)
export class GroupByMovieListResolver {
  @TypeGraphQL.Query((_returns) => [MovieListGroupBy], {
    nullable: false,
  })
  async groupByMovieList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieListArgs)
    args: GroupByMovieListArgs,
  ): Promise<MovieListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
