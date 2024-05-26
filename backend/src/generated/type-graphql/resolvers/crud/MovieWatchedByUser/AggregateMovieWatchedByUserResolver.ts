import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieWatchedByUserArgs } from "./args/AggregateMovieWatchedByUserArgs";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { AggregateMovieWatchedByUser } from "../../outputs/AggregateMovieWatchedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class AggregateMovieWatchedByUserResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieWatchedByUser, {
    nullable: false
  })
  async aggregateMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieWatchedByUserArgs): Promise<AggregateMovieWatchedByUser> {
    return getPrismaFromContext(ctx).movieWatchedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
