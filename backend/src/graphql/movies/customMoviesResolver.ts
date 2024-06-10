import * as TypeGraphQL from 'type-graphql'
import { FindManyMovieArgs, Movie } from '@/generated/type-graphql'
import { GraphQLResolveInfo } from 'graphql/type'
import { SearchMoviesArgs } from '@/graphql/movies/args/searchMoviesArgs'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import { AppContext } from '@/graphql/context'
import { GraphQLError } from 'graphql/index'
import { MovieSearchCriteriaHandler } from '@/search/handlers/movieSearchCriteriaHandler'
import { Decades } from '@/graphql/models/decades'

@TypeGraphQL.Resolver()
export class CustomMoviesResolver {
  @TypeGraphQL.Query((_returns) => [Movie], {
    nullable: false
  })
  async searchMovies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMovieArgs,
    @TypeGraphQL.Args() searchCriteriaArgs: SearchMoviesArgs
  ): Promise<Movie[]> {
    const criteriaHandler = new MovieSearchCriteriaHandler(searchCriteriaArgs)
    const where = criteriaHandler.buildWhere()

    // @ts-ignore
    args.where = {
      ...args.where,
      ...where
    }

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movie.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }

  @TypeGraphQL.Query(() => Decades)
  async getMovieDecades(@TypeGraphQL.Ctx() ctx: AppContext): Promise<Decades> {
    const prisma = ctx.prisma

    const movies = await prisma.movieInfo.aggregate({
      _min: {
        releaseDate: true
      },
      _max: {
        releaseDate: true
      }
    })

    const oldestDate = movies._min.releaseDate
    const newestDate = movies._max.releaseDate

    if (!oldestDate || !newestDate) throw new GraphQLError('No movies found')

    const oldestYear = new Date(oldestDate).getFullYear()
    const newestYear = new Date(newestDate).getFullYear()

    const decades: number[] = []
    for (
      let year = Math.floor(oldestYear / 10) * 10;
      year <= newestYear;
      year += 10
    ) {
      decades.push(year)
    }

    return { decades }
  }
}
