import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieWatchedByUser)
export class MovieWatchedByUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieWatchedByUser: MovieWatchedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUniqueOrThrow({
      where: {
        userId_movieId: {
          userId: movieWatchedByUser.userId,
          movieId: movieWatchedByUser.movieId,
        },
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieWatchedByUser: MovieWatchedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieWatchedByUser.findUniqueOrThrow({
      where: {
        userId_movieId: {
          userId: movieWatchedByUser.userId,
          movieId: movieWatchedByUser.movieId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
