import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieCrewMemberOnMovieArgs } from "./args/GroupByMovieCrewMemberOnMovieArgs";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { MovieCrewMemberOnMovieGroupBy } from "../../outputs/MovieCrewMemberOnMovieGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberOnMovie)
export class GroupByMovieCrewMemberOnMovieResolver {
  @TypeGraphQL.Query(_returns => [MovieCrewMemberOnMovieGroupBy], {
    nullable: false
  })
  async groupByMovieCrewMemberOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieCrewMemberOnMovieArgs): Promise<MovieCrewMemberOnMovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberOnMovie.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
