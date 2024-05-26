import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewLikedByUserArgs } from "./args/AggregateMovieReviewLikedByUserArgs";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { AggregateMovieReviewLikedByUser } from "../../outputs/AggregateMovieReviewLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class AggregateMovieReviewLikedByUserResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieReviewLikedByUser, {
    nullable: false
  })
  async aggregateMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieReviewLikedByUserArgs): Promise<AggregateMovieReviewLikedByUser> {
    return getPrismaFromContext(ctx).movieReviewLikedByUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
