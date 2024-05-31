import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieReviewLikedByUserArgs } from "./args/FindFirstMovieReviewLikedByUserArgs";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class FindFirstMovieReviewLikedByUserResolver {
  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async findFirstMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieReviewLikedByUserArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
