import * as TypeGraphQL from 'type-graphql'
import {
  Arg,
  Ctx,
  Field,
  Float,
  Int,
  ObjectType,
  Query,
  Root
} from 'type-graphql'
import { Movie } from '@/generated/type-graphql'
import { MovieStatsSummary } from '@/graphql/models/movieStatsSummary'
import { AppContext } from '@/graphql/context'

@TypeGraphQL.ObjectType()
class MovieStatsTopRated {
  @TypeGraphQL.Field(() => String)
  movieId!: String

  @TypeGraphQL.Field(() => String)
  movieName!: String

  @TypeGraphQL.Field(() => Float)
  avgRating!: number
}

@ObjectType()
export class MovieStatsTopViews {
  @Field(() => String)
  movieId!: string

  @TypeGraphQL.Field(() => String)
  movieName!: String

  @Field(() => Int)
  totalViews!: number
}

@ObjectType()
export class MovieStatsTopLikes {
  @Field(() => String)
  movieId!: string

  @TypeGraphQL.Field(() => String)
  movieName!: String

  @Field(() => Int)
  totalLikes!: number
}

@ObjectType()
export class MovieStatsTopAppearancesInLists {
  @Field(() => String)
  movieId!: string

  @TypeGraphQL.Field(() => String)
  movieName!: String

  @Field(() => Int)
  appearancesInLists!: number
}

@ObjectType()
export class MovieStatsTopGenres {
  @Field(() => String)
  genreId!: string

  @TypeGraphQL.Field(() => String)
  genreName!: String

  @Field(() => Int)
  movieCount!: number
}

@ObjectType()
export class MoviesPostedYearly {
  @Field(() => Int)
  year!: number

  @Field(() => Int)
  totalMoviesPosted!: number
}

@ObjectType()
export class TopMovieCrewMemberType {
  @Field(() => String)
  movieCrewMemberTypeId!: string

  @Field(() => String)
  movieCrewMemberTypeName!: string

  @Field(() => Int)
  movieCount!: number
}

@ObjectType()
export class TopPerson {
  @Field(() => String)
  personId!: string

  @Field(() => String)
  personName!: string

  @Field(() => Int)
  appearancesInMovies!: number

  @Field(() => Float)
  popularity!: number
}

@ObjectType()
export class AppStats {
  @Field(() => Int)
  totalAppUsers!: number

  @Field(() => Int)
  usersWithMovieLists!: number

  @Field(() => Int)
  totalMovieLists!: number

  @Field(() => Int)
  totalLikes!: number

  @Field(() => Int)
  totalMovieWatches!: number

  @Field(() => Int)
  totalMoviesInWatchlists!: number
}

@TypeGraphQL.Resolver((of) => Movie)
export class MovieStatsSummaryResolver {
  @TypeGraphQL.FieldResolver((type) => MovieStatsSummary)
  async statsSummary(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @Root() movie: Movie
  ): Promise<MovieStatsSummary> {
    const prisma = ctx.prisma

    const ratings = await prisma.movieRating.findMany({
      where: { movieId: movie.id },
      select: { rating: true }
    })
    const totalRatings = ratings.length
    const avgRating =
      totalRatings > 0
        ? ratings.reduce((sum, { rating }) => sum + rating, 0) / totalRatings
        : 0

    const totalViews = await prisma.movieWatchedByUser.count({
      where: { movieId: movie.id }
    })

    const totalLikes = await prisma.movieLikedByUser.count({
      where: { movieId: movie.id }
    })

    const appearancesInLists = await prisma.movieList.count({
      where: {
        movies: {
          some: { id: movie.id }
        }
      }
    })

    return {
      avgRating,
      totalViews,
      totalLikes,
      appearancesInLists
    }
  }

  @Query(() => [MovieStatsTopRated])
  async topMoviesByRating(
    @Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MovieStatsTopRated[]> {
    const prisma = ctx.prisma

    const movies = await prisma.movie.findMany({
      include: {
        ratedBy: true,
        movieInfo: {
          select: {
            title: true
          }
        }
      }
    })

    const movieStatsSummaries: MovieStatsTopRated[] = await Promise.all(
      movies.map(async (movie) => {
        const ratings = movie.ratedBy.map((rating) => rating.rating)
        const totalRatings = ratings.length
        const avgRating =
          totalRatings > 0
            ? ratings.reduce((sum, rating) => sum + rating, 0) / totalRatings
            : 0

        return {
          movieId: movie.id,
          movieName: movie?.movieInfo?.title ?? '',
          avgRating
        }
      })
    )

    return movieStatsSummaries
      .sort((a, b) => b.avgRating - a.avgRating)
      .slice(0, first)
  }

  @TypeGraphQL.Query(() => [MovieStatsTopViews])
  async topMoviesByViews(
    @Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MovieStatsTopViews[]> {
    const prisma = ctx.prisma

    const movies = await prisma.movie.findMany({
      include: {
        watchedBy: true,
        movieInfo: {
          select: {
            title: true
          }
        }
      }
    })

    const movieStatsSummaries: MovieStatsTopViews[] = movies.map((movie) => ({
      movieId: movie.id,
      movieName: movie?.movieInfo?.title ?? '',
      totalViews: movie.watchedBy.length
    }))

    return movieStatsSummaries
      .sort((a, b) => b.totalViews - a.totalViews)
      .slice(0, first)
  }

  @TypeGraphQL.Query(() => [MovieStatsTopLikes])
  async topMoviesByLikes(
    @Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MovieStatsTopLikes[]> {
    const prisma = ctx.prisma

    const movies = await prisma.movie.findMany({
      include: {
        likedBy: true,
        movieInfo: {
          select: {
            title: true
          }
        }
      }
    })

    const movieStatsSummaries: MovieStatsTopLikes[] = movies.map((movie) => ({
      movieId: movie.id,
      movieName: movie?.movieInfo?.title ?? '',
      totalLikes: movie.likedBy.length
    }))

    return movieStatsSummaries
      .sort((a, b) => b.totalLikes - a.totalLikes)
      .slice(0, first)
  }

  @TypeGraphQL.Query(() => [MovieStatsTopAppearancesInLists])
  async topMoviesByAppearancesInLists(
    @Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MovieStatsTopAppearancesInLists[]> {
    const prisma = ctx.prisma

    const movies = await prisma.movie.findMany({
      include: {
        movieLists: true,
        movieInfo: {
          select: {
            title: true
          }
        }
      }
    })

    const movieStatsSummaries: MovieStatsTopAppearancesInLists[] = movies.map(
      (movie) => ({
        movieId: movie.id,
        movieName: movie?.movieInfo?.title ?? '',
        appearancesInLists: movie.movieLists.length
      })
    )

    return movieStatsSummaries
      .sort((a, b) => b.appearancesInLists - a.appearancesInLists)
      .slice(0, first)
  }

  @TypeGraphQL.Query(() => [MovieStatsTopGenres])
  async topGenres(
    @Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MovieStatsTopGenres[]> {
    const prisma = ctx.prisma

    const genres = await prisma.genre.findMany({
      include: {
        movies: true
      }
    })

    const genreStatsSummaries: MovieStatsTopGenres[] = genres.map((genre) => ({
      genreId: genre.id,
      genreName: genre.name,
      movieCount: genre.movies.length
    }))

    return genreStatsSummaries
      .sort((a, b) => b.movieCount - a.movieCount)
      .slice(0, first)
  }

  @TypeGraphQL.Query(() => [MoviesPostedYearly])
  async moviesPostedYearly(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<MoviesPostedYearly[]> {
    const prisma = ctx.prisma

    const currentYear = new Date().getFullYear()

    const yearlyCounts: MoviesPostedYearly[] = []
    for (let year = currentYear; year >= currentYear - (first - 1); year--) {
      const totalMoviesPosted = await prisma.movie.count({
        where: {
          movieInfo: {
            releaseDate: {
              gte: new Date(`${year}-01-01`),
              lt: new Date(`${year + 1}-01-01`)
            }
          }
        }
      })

      yearlyCounts.push({
        year,
        totalMoviesPosted
      })
    }

    return yearlyCounts
  }

  @TypeGraphQL.Query(() => [TopMovieCrewMemberType])
  async topCrewMemberTypes(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<TopMovieCrewMemberType[]> {
    const prisma = ctx.prisma

    const crewMemberTypesWithCounts = await prisma.movieCrewMemberType.findMany(
      {
        include: {
          movieCrewMembers: {
            select: {
              movie: true
            }
          }
        }
      }
    )

    const topCrewMemberTypes = crewMemberTypesWithCounts
      .map((crewMemberType) => ({
        movieCrewMemberTypeId: crewMemberType.id,
        movieCrewMemberTypeName: crewMemberType.name,
        movieCount: crewMemberType.movieCrewMembers.length
      }))
      .sort((a, b) => b.movieCount - a.movieCount)
      .slice(0, first)

    return topCrewMemberTypes
  }

  @TypeGraphQL.Query(() => [TopPerson])
  async topPersons(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @Arg('first', () => Int, { defaultValue: 10 }) first: number
  ): Promise<TopPerson[]> {
    const prisma = ctx.prisma

    const crewMembersWithCounts = await prisma.movieCrewMember.findMany({
      include: {
        movies: true
      }
    })

    const topPersons = crewMembersWithCounts
      .map((crewMember) => ({
        personId: crewMember.id,
        personName: crewMember.name,
        appearancesInMovies: crewMember.movies.length,
        popularity: crewMember.popularity
      }))
      .sort((a, b) => {
        if (b.appearancesInMovies !== a.appearancesInMovies)
          return b.appearancesInMovies - a.appearancesInMovies
        return b.popularity - a.popularity
      })
      .slice(0, first)

    return topPersons
  }

  @TypeGraphQL.Query(() => AppStats)
  async appStats(@TypeGraphQL.Ctx() ctx: AppContext): Promise<AppStats> {
    const prisma = ctx.prisma

    const totalAppUsers = await prisma.movifierAppUser.count()
    const usersWithMovieLists = await prisma.movifierAppUser.count({
      where: { movieLists: { some: {} } }
    })
    const totalMovieLists = await prisma.movieList.count()
    const totalLikes = await prisma.movieLikedByUser.count()
    const totalMovieWatches = await prisma.movieWatchedByUser.count()
    const totalMoviesInWatchlists = await prisma.userMovieWatchlist.count()

    return {
      totalAppUsers,
      usersWithMovieLists,
      totalMovieLists,
      totalLikes,
      totalMovieWatches,
      totalMoviesInWatchlists
    }
  }
}
