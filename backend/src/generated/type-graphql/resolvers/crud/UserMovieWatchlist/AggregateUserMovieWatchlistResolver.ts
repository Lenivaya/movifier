import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserMovieWatchlistArgs } from "./args/AggregateUserMovieWatchlistArgs";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { AggregateUserMovieWatchlist } from "../../outputs/AggregateUserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class AggregateUserMovieWatchlistResolver {
  @TypeGraphQL.Query(_returns => AggregateUserMovieWatchlist, {
    nullable: false
  })
  async aggregateUserMovieWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserMovieWatchlistArgs): Promise<AggregateUserMovieWatchlist> {
    return getPrismaFromContext(ctx).userMovieWatchlist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
