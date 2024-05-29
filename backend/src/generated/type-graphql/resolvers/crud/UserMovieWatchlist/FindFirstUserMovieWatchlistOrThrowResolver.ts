import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserMovieWatchlistOrThrowArgs } from "./args/FindFirstUserMovieWatchlistOrThrowArgs";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class FindFirstUserMovieWatchlistOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async findFirstUserMovieWatchlistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserMovieWatchlistOrThrowArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
