import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieListCommentArgs } from "./args/DeleteOneMovieListCommentArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class DeleteOneMovieListCommentResolver {
  @TypeGraphQL.Mutation((_returns) => MovieListComment, {
    nullable: true,
  })
  async deleteOneMovieListComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieListCommentArgs)
    args: DeleteOneMovieListCommentArgs,
  ): Promise<MovieListComment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
