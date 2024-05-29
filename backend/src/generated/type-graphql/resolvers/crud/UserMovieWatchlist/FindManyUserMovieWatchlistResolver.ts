import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserMovieWatchlistArgs } from "./args/FindManyUserMovieWatchlistArgs";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class FindManyUserMovieWatchlistResolver {
  @TypeGraphQL.Query(_returns => [UserMovieWatchlist], {
    nullable: false
  })
  async userMovieWatchlists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserMovieWatchlistArgs): Promise<UserMovieWatchlist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
