import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieListCommentArgs } from "./args/UpdateOneMovieListCommentArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class UpdateOneMovieListCommentResolver {
  @TypeGraphQL.Mutation((_returns) => MovieListComment, {
    nullable: true,
  })
  async updateOneMovieListComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UpdateOneMovieListCommentArgs)
    args: UpdateOneMovieListCommentArgs,
  ): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
