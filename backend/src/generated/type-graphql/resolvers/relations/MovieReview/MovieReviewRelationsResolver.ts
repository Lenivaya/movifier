import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieRating } from "../../../models/MovieRating";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { MovieReviewLikedByArgs } from "./args/MovieReviewLikedByArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReview)
export class MovieReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieRating, {
    nullable: false
  })
  async rating(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovieRating> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findUniqueOrThrow({
      where: {
        id: movieReview.id,
      },
    }).rating({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieReviewLikedByUser], {
    nullable: false
  })
  async likedBy(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieReviewLikedByArgs): Promise<MovieReviewLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReview.findUniqueOrThrow({
      where: {
        id: movieReview.id,
      },
    }).likedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
