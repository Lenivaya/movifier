import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieReviewOrThrowArgs } from "./args/FindFirstMovieReviewOrThrowArgs";
import { MovieReview } from "../../../models/MovieReview";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReview)
export class FindFirstMovieReviewOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieReview, {
    nullable: true
  })
  async findFirstMovieReviewOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMovieReviewOrThrowArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
