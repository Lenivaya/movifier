import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieListCommentArgs } from "./args/GroupByMovieListCommentArgs";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovieListCommentGroupBy } from "../../outputs/MovieListCommentGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class GroupByMovieListCommentResolver {
  @TypeGraphQL.Query((_returns) => [MovieListCommentGroupBy], {
    nullable: false,
  })
  async groupByMovieListComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => GroupByMovieListCommentArgs)
    args: GroupByMovieListCommentArgs,
  ): Promise<MovieListCommentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
