import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieWatchedByUserArgs } from "./args/FindFirstMovieWatchedByUserArgs";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class FindFirstMovieWatchedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async findFirstMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
