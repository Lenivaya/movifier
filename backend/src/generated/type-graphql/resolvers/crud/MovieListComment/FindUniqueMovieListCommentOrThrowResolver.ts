import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieListCommentOrThrowArgs } from "./args/FindUniqueMovieListCommentOrThrowArgs";
import { MovieListComment } from "../../../models/MovieListComment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListComment)
export class FindUniqueMovieListCommentOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieListComment, {
    nullable: true
  })
  async getMovieListComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueMovieListCommentOrThrowArgs) args: FindUniqueMovieListCommentOrThrowArgs): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
