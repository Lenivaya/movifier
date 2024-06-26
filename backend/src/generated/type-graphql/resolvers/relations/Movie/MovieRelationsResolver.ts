import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genre } from "../../../models/Genre";
import { Movie } from "../../../models/Movie";
import { MovieCrewMemberOnMovie } from "../../../models/MovieCrewMemberOnMovie";
import { MovieInfo } from "../../../models/MovieInfo";
import { MovieKeywordCategory } from "../../../models/MovieKeywordCategory";
import { MovieLikedByUser } from "../../../models/MovieLikedByUser";
import { MovieList } from "../../../models/MovieList";
import { MovieRating } from "../../../models/MovieRating";
import { MovieSpokenLanguage } from "../../../models/MovieSpokenLanguage";
import { MovieStats } from "../../../models/MovieStats";
import { MovieStudio } from "../../../models/MovieStudio";
import { MovieWatchedByUser } from "../../../models/MovieWatchedByUser";
import { UserMovieWatchlist } from "../../../models/UserMovieWatchlist";
import { MovieCrewMembersArgs } from "./args/MovieCrewMembersArgs";
import { MovieGenresArgs } from "./args/MovieGenresArgs";
import { MovieInWatchlistByUsersArgs } from "./args/MovieInWatchlistByUsersArgs";
import { MovieKeywordCategoriesArgs } from "./args/MovieKeywordCategoriesArgs";
import { MovieLikedByArgs } from "./args/MovieLikedByArgs";
import { MovieMovieInfoArgs } from "./args/MovieMovieInfoArgs";
import { MovieMovieListsArgs } from "./args/MovieMovieListsArgs";
import { MovieMovieStatsArgs } from "./args/MovieMovieStatsArgs";
import { MovieRatedByArgs } from "./args/MovieRatedByArgs";
import { MovieSpokenLanguagesArgs } from "./args/MovieSpokenLanguagesArgs";
import { MovieStudiosArgs } from "./args/MovieStudiosArgs";
import { MovieWatchedByArgs } from "./args/MovieWatchedByArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MovieInfo, {
    nullable: true
  })
  async movieInfo(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieMovieInfoArgs): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).movieInfo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovieStats, {
    nullable: true
  })
  async movieStats(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieMovieStatsArgs): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).movieStats({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieCrewMemberOnMovie], {
    nullable: false
  })
  async crewMembers(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieCrewMembersArgs): Promise<MovieCrewMemberOnMovie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).crewMembers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieStudio], {
    nullable: false
  })
  async studios(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieStudiosArgs): Promise<MovieStudio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).studios({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieGenresArgs): Promise<Genre[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).genres({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieKeywordCategory], {
    nullable: false
  })
  async keywordCategories(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieKeywordCategoriesArgs): Promise<MovieKeywordCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).keywordCategories({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieRating], {
    nullable: false
  })
  async ratedBy(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieRatedByArgs): Promise<MovieRating[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).ratedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieList], {
    nullable: false
  })
  async movieLists(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieMovieListsArgs): Promise<MovieList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).movieLists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieSpokenLanguage], {
    nullable: false
  })
  async spokenLanguages(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieSpokenLanguagesArgs): Promise<MovieSpokenLanguage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).spokenLanguages({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieWatchedByUser], {
    nullable: false
  })
  async watchedBy(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieWatchedByArgs): Promise<MovieWatchedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).watchedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MovieLikedByUser], {
    nullable: false
  })
  async likedBy(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieLikedByArgs): Promise<MovieLikedByUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).likedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [UserMovieWatchlist], {
    nullable: false
  })
  async inWatchlistByUsers(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovieInWatchlistByUsersArgs): Promise<UserMovieWatchlist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        id: movie.id,
      },
    }).inWatchlistByUsers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
