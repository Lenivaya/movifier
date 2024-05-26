import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { MovieList } from "../../../models/MovieList";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { MovieRating } from "../../../models/MovieRating";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovifierAppUserLikedMovieReviewsArgs } from "./args/MovifierAppUserLikedMovieReviewsArgs";
import { MovifierAppUserLikedMoviesArgs } from "./args/MovifierAppUserLikedMoviesArgs";
import { MovifierAppUserMovieListLikedByUserArgs } from "./args/MovifierAppUserMovieListLikedByUserArgs";
import { MovifierAppUserMovieListsArgs } from "./args/MovifierAppUserMovieListsArgs";
import { MovifierAppUserMovieListsCommentsArgs } from "./args/MovifierAppUserMovieListsCommentsArgs";
import { MovifierAppUserRatedMoviesArgs } from "./args/MovifierAppUserRatedMoviesArgs";
import { MovifierAppUserWatchedMoviesArgs } from "./args/MovifierAppUserWatchedMoviesArgs";
import { MovifierAppUserWatchlistArgs } from "./args/MovifierAppUserWatchlistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovifierAppUser)
export class MovifierAppUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async watchlist(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserWatchlistArgs): Promise<Movie[]> {
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
  async ratedMovies(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserRatedMoviesArgs): Promise<MovieRating[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).ratedMovies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieWatchedByUser], {
    nullable: false
  })
  async watchedMovies(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserWatchedMoviesArgs): Promise<MovieWatchedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).watchedMovies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieLikedByUser], {
    nullable: false
  })
  async likedMovies(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserLikedMoviesArgs): Promise<MovieLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).likedMovies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieList], {
    nullable: false
  })
  async movieLists(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserMovieListsArgs): Promise<MovieList[]> {
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
  async movieListsComments(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserMovieListsCommentsArgs): Promise<MovieListComment[]> {
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

  @TypeGraphQL.FieldResolver(_type => [MovieReviewLikedByUser], {
    nullable: false
  })
  async likedMovieReviews(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserLikedMovieReviewsArgs): Promise<MovieReviewLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).likedMovieReviews({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieListLikedByUser], {
    nullable: false
  })
  async MovieListLikedByUser(@TypeGraphQL.Root() movifierAppUser: MovifierAppUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovifierAppUserMovieListLikedByUserArgs): Promise<MovieListLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: movifierAppUser.id,
      },
    }).MovieListLikedByUser({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
