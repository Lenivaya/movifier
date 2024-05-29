import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserMovieWatchlistOrThrowArgs } from "./args/FindUniqueUserMovieWatchlistOrThrowArgs";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class FindUniqueUserMovieWatchlistOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserMovieWatchlist, {
    nullable: true
  })
  async getUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserMovieWatchlistOrThrowArgs): Promise<UserMovieWatchlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
