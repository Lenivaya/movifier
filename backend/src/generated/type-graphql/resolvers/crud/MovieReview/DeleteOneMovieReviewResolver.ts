import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieReviewArgs } from "./args/DeleteOneMovieReviewArgs";
import { MovieReview } from "@/generated/type-graphql/models/MovieReview";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieReview)
export class DeleteOneMovieReviewResolver {
  @TypeGraphQL.Mutation((_returns) => MovieReview, {
    nullable: true,
  })
  async deleteOneMovieReview(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => DeleteOneMovieReviewArgs)
    args: DeleteOneMovieReviewArgs,
  ): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
