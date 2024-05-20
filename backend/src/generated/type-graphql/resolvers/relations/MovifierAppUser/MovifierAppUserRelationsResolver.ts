import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieList } from "../../../models/MovieList";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovieRating } from "../../../models/MovieRating";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovifierAppUserMovieListsArgs } from "./args/MovifierAppUserMovieListsArgs";
import { MovifierAppUserMovieListsCommentsArgs } from "./args/MovifierAppUserMovieListsCommentsArgs";
import { MovifierAppUserRatingArgs } from "./args/MovifierAppUserRatingArgs";
import { MovifierAppUserWatchlistArgs } from "./args/MovifierAppUserWatchlistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class MovifierAppUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async watchlist(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => MovifierAppUserWatchlistArgs) args: MovifierAppUserWatchlistArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).watchlist({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieRating], {
    nullable: false
  })
  async rating(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => MovifierAppUserRatingArgs) args: MovifierAppUserRatingArgs): Promise<MovieRating[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).rating({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieList], {
    nullable: false
  })
  async movieLists(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => MovifierAppUserMovieListsArgs) args: MovifierAppUserMovieListsArgs): Promise<MovieList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).movieLists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieListComment], {
    nullable: false
  })
  async movieListsComments(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => MovifierAppUserMovieListsCommentsArgs) args: MovifierAppUserMovieListsCommentsArgs): Promise<MovieListComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).movieListsComments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
