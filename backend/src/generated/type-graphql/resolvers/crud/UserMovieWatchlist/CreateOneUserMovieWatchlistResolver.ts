import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserMovieWatchlistArgs } from "./args/CreateOneUserMovieWatchlistArgs";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class CreateOneUserMovieWatchlistResolver {
  @TypeGraphQL.Mutation(_returns => UserMovieWatchlist, {
    nullable: false
  })
  async createOneUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserMovieWatchlistArgs): Promise<UserMovieWatchlist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
