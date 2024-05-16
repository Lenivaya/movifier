import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieListCommentArgs } from "./args/FindManyMovieListCommentArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class FindManyMovieListCommentResolver {
  @TypeGraphQL.Query((_returns) => [MovieListComment], {
    nullable: false,
  })
  async movieListComments(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindManyMovieListCommentArgs)
    args: FindManyMovieListCommentArgs,
  ): Promise<MovieListComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
