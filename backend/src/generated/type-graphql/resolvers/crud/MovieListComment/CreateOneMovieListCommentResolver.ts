import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieListCommentArgs } from "./args/CreateOneMovieListCommentArgs";
import { MovieListComment } from "@/generated/type-graphql/models/MovieListComment";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieListComment)
export class CreateOneMovieListCommentResolver {
  @TypeGraphQL.Mutation((_returns) => MovieListComment, {
    nullable: false,
  })
  async createOneMovieListComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovieListCommentArgs)
    args: CreateOneMovieListCommentArgs,
  ): Promise<MovieListComment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListComment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
