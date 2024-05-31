import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieWatchedByUserArgs } from "./args/FindUniqueMovieWatchedByUserArgs";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class FindUniqueMovieWatchedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async movieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieWatchedByUserArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
