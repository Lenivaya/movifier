import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieReviewLikedByUserOrThrowArgs } from "./args/FindFirstMovieReviewLikedByUserOrThrowArgs";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class FindFirstMovieReviewLikedByUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async findFirstMovieReviewLikedByUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieReviewLikedByUserOrThrowArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
