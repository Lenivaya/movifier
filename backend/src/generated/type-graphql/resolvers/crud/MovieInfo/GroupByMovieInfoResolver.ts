import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieInfoArgs } from "./args/GroupByMovieInfoArgs";
import { MovieInfo } from "../../../models/MovieInfo";
import { MovieInfoGroupBy } from "../../outputs/MovieInfoGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieInfo)
export class GroupByMovieInfoResolver {
  @TypeGraphQL.Query(_returns => [MovieInfoGroupBy], {
    nullable: false
  })
  async groupByMovieInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieInfoArgs) args: GroupByMovieInfoArgs): Promise<MovieInfoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieInfo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
