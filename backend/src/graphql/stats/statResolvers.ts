import * as TypeGraphQL from 'type-graphql'
import { Arg, Ctx, Int, Query, Resolver } from 'type-graphql'
import { MovieStatsSummary } from '@/graphql/models/movieStatsSummary'
import { AppContext } from '@/graphql/context'

@TypeGraphQL.Resolver()
class StatisticsResolver {
  // @Query(() => [MovieStatsSummary])
  // async topMovies(
  //   @Ctx() ctx: AppContext,
  //   @Arg('first', () => Int, { defaultValue: 10 }) first: number
  // ): Promise<MovieStatsSummary[]> {
  //   // Fetch the top movies based on some criteria (e.g., top-rated, most-watched)
  //   const movies = await prisma.movie.findMany({
  //     take: first,
  //     orderBy: {
  //       // Example criteria: highest average rating
  //       movieStats: {
  //         avgRating: 'desc'
  //       }
  //     },
  //     include: {
  //       movieStats: true
  //     }
  //   })
  //
  //   // Calculate the statistics for each movie
  //   return movies.map((movie) => ({
  //     avgRating: movie.movieStats?.avgRating || 0,
  //     totalViews: movie.movieStats?.timesWatchedCount || 0,
  //     totalLikes: movie.movieStats?.totalLikesCount || 0,
  //     appearancesInLists: movie.movieLists.length,
  //     movieId: movie.id
  //   }))
  // }
}
