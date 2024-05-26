import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class MovieReviewLikedByUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieReview, {
    nullable: false
  })
  async movieReview(@TypeGraphQL.Root() movieReviewLikedByUser: MovieReviewLikedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovieReview> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findUniqueOrThrow({
      where: {
        userId_movieReviewId: {
          userId: movieReviewLikedByUser.userId,
          movieReviewId: movieReviewLikedByUser.movieReviewId,
        },
      },
    }).movieReview({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieReviewLikedByUser: MovieReviewLikedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findUniqueOrThrow({
      where: {
        userId_movieReviewId: {
          userId: movieReviewLikedByUser.userId,
          movieReviewId: movieReviewLikedByUser.movieReviewId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
