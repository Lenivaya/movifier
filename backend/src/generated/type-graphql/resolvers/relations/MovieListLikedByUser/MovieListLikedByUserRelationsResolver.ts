import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieList } from "../../../models/MovieList";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieListLikedByUser)
export class MovieListLikedByUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieList, {
    nullable: false
  })
  async movieList(@TypeGraphQL.Root() movieListLikedByUser: MovieListLikedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovieList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.findUniqueOrThrow({
      where: {
        userId_movieListId: {
          userId: movieListLikedByUser.userId,
          movieListId: movieListLikedByUser.movieListId,
        },
      },
    }).movieList({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieListLikedByUser: MovieListLikedByUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieListLikedByUser.findUniqueOrThrow({
      where: {
        userId_movieListId: {
          userId: movieListLikedByUser.userId,
          movieListId: movieListLikedByUser.movieListId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
