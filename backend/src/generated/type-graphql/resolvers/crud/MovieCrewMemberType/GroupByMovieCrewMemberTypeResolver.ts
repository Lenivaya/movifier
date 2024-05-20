import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieCrewMemberTypeArgs } from "./args/GroupByMovieCrewMemberTypeArgs";
import { MovieCrewMemberType } from "../../../models/MovieCrewMemberType";
import { MovieCrewMemberTypeGroupBy } from "../../outputs/MovieCrewMemberTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieCrewMemberType)
export class GroupByMovieCrewMemberTypeResolver {
  @TypeGraphQL.Query(_returns => [MovieCrewMemberTypeGroupBy], {
    nullable: false
  })
  async groupByMovieCrewMemberType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByMovieCrewMemberTypeArgs) args: GroupByMovieCrewMemberTypeArgs): Promise<MovieCrewMemberTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieCrewMemberType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
