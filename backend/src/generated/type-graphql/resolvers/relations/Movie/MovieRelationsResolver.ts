import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genre } from "@/generated/type-graphql/models/Genre";
import { Movie } from "@/generated/type-graphql/models/Movie";
import { MovieCrewMember } from "@/generated/type-graphql/models/MovieCrewMember";
import { MovieInfo } from "@/generated/type-graphql/models/MovieInfo";
import { MovieKeywordCategory } from "@/generated/type-graphql/models/MovieKeywordCategory";
import { MovieList } from "@/generated/type-graphql/models/MovieList";
import { MovieRating } from "@/generated/type-graphql/models/MovieRating";
import { MovieSpokenLanguage } from "@/generated/type-graphql/models/MovieSpokenLanguage";
import { MovieStats } from "@/generated/type-graphql/models/MovieStats";
import { MovieStudio } from "@/generated/type-graphql/models/MovieStudio";
import { MovifierAppUser } from "@/generated/type-graphql/models/MovifierAppUser";
import { MovieCrewMembersArgs } from "./args/MovieCrewMembersArgs";
import { MovieGenresArgs } from "./args/MovieGenresArgs";
import { MovieInWatchlistByUsersArgs } from "./args/MovieInWatchlistByUsersArgs";
import { MovieKeywordCategoriesArgs } from "./args/MovieKeywordCategoriesArgs";
import { MovieMovieInfoArgs } from "./args/MovieMovieInfoArgs";
import { MovieMovieListsArgs } from "./args/MovieMovieListsArgs";
import { MovieMovieStatsArgs } from "./args/MovieMovieStatsArgs";
import { MovieRatingsArgs } from "./args/MovieRatingsArgs";
import { MovieSpokenLanguagesArgs } from "./args/MovieSpokenLanguagesArgs";
import { MovieStudiosArgs } from "./args/MovieStudiosArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => MovieInfo, {
    nullable: true,
  })
  async movieInfo(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieMovieInfoArgs) args: MovieMovieInfoArgs,
  ): Promise<MovieInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .movieInfo({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => MovieStats, {
    nullable: true,
  })
  async MovieStats(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieMovieStatsArgs) args: MovieMovieStatsArgs,
  ): Promise<MovieStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .MovieStats({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieCrewMember], {
    nullable: false,
  })
  async crewMembers(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieCrewMembersArgs)
    args: MovieCrewMembersArgs,
  ): Promise<MovieCrewMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .crewMembers({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieStudio], {
    nullable: false,
  })
  async studios(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieStudiosArgs) args: MovieStudiosArgs,
  ): Promise<MovieStudio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .studios({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Genre], {
    nullable: false,
  })
  async genres(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieGenresArgs) args: MovieGenresArgs,
  ): Promise<Genre[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .genres({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieKeywordCategory], {
    nullable: false,
  })
  async keywordCategories(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieKeywordCategoriesArgs)
    args: MovieKeywordCategoriesArgs,
  ): Promise<MovieKeywordCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .keywordCategories({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieRating], {
    nullable: false,
  })
  async ratings(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieRatingsArgs) args: MovieRatingsArgs,
  ): Promise<MovieRating[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .ratings({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieList], {
    nullable: false,
  })
  async movieLists(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieMovieListsArgs) args: MovieMovieListsArgs,
  ): Promise<MovieList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .movieLists({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovifierAppUser], {
    nullable: false,
  })
  async inWatchlistByUsers(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieInWatchlistByUsersArgs)
    args: MovieInWatchlistByUsersArgs,
  ): Promise<MovifierAppUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .inWatchlistByUsers({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [MovieSpokenLanguage], {
    nullable: false,
  })
  async spokenLanguages(
    @TypeGraphQL.Root() movie: Movie,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => MovieSpokenLanguagesArgs)
    args: MovieSpokenLanguagesArgs,
  ): Promise<MovieSpokenLanguage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie.findUniqueOrThrow({
        where: {
          id: movie.id,
        },
      })
      .spokenLanguages({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
