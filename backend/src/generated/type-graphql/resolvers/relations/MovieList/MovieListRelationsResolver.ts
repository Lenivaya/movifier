import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie } from "../../../models/Movie";
import { MovieList } from "../../../models/MovieList";
import { MovieListComment } from "../../../models/MovieListComment";
import { MovieListLikedByUser } from "../../../models/MovieListLikedByUser";
import { MovieListStats } from "../../../models/MovieListStats";
import { MovifierAppUser } from "../../../models/MovifierAppUser";
import { MovieListCommentsArgs } from "./args/MovieListCommentsArgs";
import { MovieListLikedByArgs } from "./args/MovieListLikedByArgs";
import { MovieListMoviesArgs } from "./args/MovieListMoviesArgs";
import { MovieListStatsArgs } from "./args/MovieListStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieList)
export class MovieListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() movieList: MovieList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieListMoviesArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      where: {
        id: movieList.id,
      },
    }).movies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovifierAppUser, {
    nullable: false
  })
  async movieListAuthor(@TypeGraphQL.Root() movieList: MovieList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovifierAppUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      where: {
        id: movieList.id,
      },
    }).movieListAuthor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovieListStats, {
    nullable: true
  })
  async stats(@TypeGraphQL.Root() movieList: MovieList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieListStatsArgs): Promise<MovieListStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      where: {
        id: movieList.id,
      },
    }).stats({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieListComment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() movieList: MovieList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieListCommentsArgs): Promise<MovieListComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      where: {
        id: movieList.id,
      },
    }).comments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieListLikedByUser], {
    nullable: false
  })
  async likedBy(@TypeGraphQL.Root() movieList: MovieList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieListLikedByArgs): Promise<MovieListLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieList.findUniqueOrThrow({
      where: {
        id: movieList.id,
      },
    }).likedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
