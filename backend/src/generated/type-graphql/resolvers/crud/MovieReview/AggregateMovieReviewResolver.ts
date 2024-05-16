import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewArgs } from "./args/AggregateMovieReviewArgs";
import { MovieReview } from "@/generated/type-graphql/models/MovieReview";
import { AggregateMovieReview } from "../../outputs/AggregateMovieReview";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieReview)
export class AggregateMovieReviewResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieReview, {
    nullable: false,
  })
  async aggregateMovieReview(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => AggregateMovieReviewArgs)
    args: AggregateMovieReviewArgs,
  ): Promise<AggregateMovieReview> {
    return getPrismaFromContext(ctx).movieReview.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
