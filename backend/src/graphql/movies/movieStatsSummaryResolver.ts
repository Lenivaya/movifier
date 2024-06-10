import * as TypeGraphQL from 'type-graphql'
import { Root } from 'type-graphql'
import { Movie } from '@/generated/type-graphql'
import { MovieStatsSummary } from '@/graphql/models/movieStatsSummary'
import { AppContext } from '@/graphql/context'

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
}
