import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieWatchedByUserOrThrowArgs } from "./args/FindUniqueMovieWatchedByUserOrThrowArgs";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class FindUniqueMovieWatchedByUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieWatchedByUser, {
    nullable: true
  })
  async getMovieWatchedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieWatchedByUserOrThrowArgs): Promise<MovieWatchedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
