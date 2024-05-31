import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieSpokenLanguageArgs } from "./args/GroupByMovieSpokenLanguageArgs";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { MovieSpokenLanguageGroupBy } from "../../outputs/MovieSpokenLanguageGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieSpokenLanguage)
export class GroupByMovieSpokenLanguageResolver {
  @TypeGraphQL.Query(_returns => [MovieSpokenLanguageGroupBy], {
    nullable: false
  })
  async groupByMovieSpokenLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieSpokenLanguageArgs): Promise<MovieSpokenLanguageGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieSpokenLanguage.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
