import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieRating } from "../../../models/MovieRating";
import { MovieReview } from "../../../models/MovieReview";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovieRatingReviewArgs } from "./args/MovieRatingReviewArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieRating)
export class MovieRatingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieReview, {
    nullable: true
  })
  async review(@TypeGraphQL.Root() movieRating: MovieRating, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieRatingReviewArgs): Promise<MovieReview | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUniqueOrThrow({
      where: {
        id: movieRating.id,
      },
    }).review({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieRating: MovieRating, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUniqueOrThrow({
      where: {
        id: movieRating.id,
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieRating: MovieRating, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieRating.findUniqueOrThrow({
      where: {
        id: movieRating.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
