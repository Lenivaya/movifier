import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieStats } from "../../../models/MovieStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieStats)
export class MovieStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieStats: MovieStats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieStats.findUniqueOrThrow({
      where: {
        id: movieStats.id,
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
