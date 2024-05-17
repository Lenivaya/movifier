import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieList } from "../../../models/MovieList";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovieListStats } from "../../../models/MovieListStats";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovieListMovieListCommentsArgs } from "./args/MovieListMovieListCommentsArgs";
import { MovieListMovieListStatsArgs } from "./args/MovieListMovieListStatsArgs";
import { MovieListMoviesArgs } from "./args/MovieListMoviesArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieList)
export class MovieListRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie], {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movieList: MovieList,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieListMoviesArgs) args: MovieListMoviesArgs,
  ): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieList.findUniqueOrThrow({
        where: {
          id: movieList.id,
        },
      })
      .movies({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => MovifierAppUser, {
    nullable: false,
  })
  async movieListAuthor(
    @TypeGraphQL.Root() movieList: MovieList,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieList.findUniqueOrThrow({
        where: {
          id: movieList.id,
        },
      })
      .movieListAuthor({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => MovieListStats, {
    nullable: true,
  })
  async MovieListStats(
    @TypeGraphQL.Root() movieList: MovieList,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieListMovieListStatsArgs)
    args: MovieListMovieListStatsArgs,
  ): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieList.findUniqueOrThrow({
        where: {
          id: movieList.id,
        },
      })
      .MovieListStats({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieListComment], {
    nullable: false,
  })
  async movieListComments(
    @TypeGraphQL.Root() movieList: MovieList,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieListMovieListCommentsArgs)
    args: MovieListMovieListCommentsArgs,
  ): Promise<MovieListComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieList.findUniqueOrThrow({
        where: {
          id: movieList.id,
        },
      })
      .movieListComments({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
