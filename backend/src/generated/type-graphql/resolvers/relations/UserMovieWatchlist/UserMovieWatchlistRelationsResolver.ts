import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserMovieWatchlist)
export class UserMovieWatchlistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() userMovieWatchlist: UserMovieWatchlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findUniqueOrThrow({
      where: {
        userId_movieId: {
          userId: userMovieWatchlist.userId,
          movieId: userMovieWatchlist.movieId,
        },
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userMovieWatchlist: UserMovieWatchlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userMovieWatchlist.findUniqueOrThrow({
      where: {
        userId_movieId: {
          userId: userMovieWatchlist.userId,
          movieId: userMovieWatchlist.movieId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
