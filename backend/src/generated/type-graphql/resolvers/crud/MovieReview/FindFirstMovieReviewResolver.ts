import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieReviewArgs } from "./args/FindFirstMovieReviewArgs";
import { MovieReview } from "@/generated/type-graphql/models/MovieReview";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieReview)
export class FindFirstMovieReviewResolver {
  @TypeGraphQL.Query((_returns) => MovieReview, {
    nullable: true,
  })
  async findFirstMovieReview(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => FindFirstMovieReviewArgs)
    args: FindFirstMovieReviewArgs,
  ): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
