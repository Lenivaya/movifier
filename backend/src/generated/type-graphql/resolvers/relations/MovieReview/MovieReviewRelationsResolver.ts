import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieRating } from "../../../models/MovieRating";
import { MovieReview } from "../../../models/MovieReview";
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
}
