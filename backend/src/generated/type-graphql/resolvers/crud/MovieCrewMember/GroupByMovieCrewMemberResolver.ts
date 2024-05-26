import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieCrewMemberArgs } from "./args/GroupByMovieCrewMemberArgs";
import { MovieCrewMember } from "../../../models/MovieCrewMember";
import { MovieCrewMemberGroupBy } from "../../outputs/MovieCrewMemberGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMember)
export class GroupByMovieCrewMemberResolver {
  @TypeGraphQL.Query(_returns => [MovieCrewMemberGroupBy], {
    nullable: false
  })
  async groupByMovieCrewMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieCrewMemberArgs): Promise<MovieCrewMemberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMember.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
