import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieListCommentOrThrowArgs } from "./args/FindFirstMovieListCommentOrThrowArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class FindFirstMovieListCommentOrThrowResolver {
  @TypeGraphQL.Query((_returns) => MovieListComment, {
    nullable: true,
  })
  async findFirstMovieListCommentOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieListCommentOrThrowArgs)
    args: FindFirstMovieListCommentOrThrowArgs,
  ): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
