import * as TypeGraphQL from 'type-graphql'
import { FindManyMovieArgs, Movie } from '@/generated/type-graphql'
import { GraphQLResolveInfo } from 'graphql/type'
import { SearchMoviesArgs } from '@/graphql/movies/args/searchMoviesArgs'
import { Prisma } from '@prisma/client'
import { isSome } from '@/lib/types/option'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import { AppContext } from '@/graphql/context'
import { GraphQLError } from 'graphql/index'
import { D } from '@mobily/ts-belt'

@TypeGraphQL.ObjectType()
class Decades {
  @TypeGraphQL.Field(() => [Number])
  decades!: number[]
}

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
    let where: Prisma.MovieWhereInput = {}

    const search = searchCriteriaArgs.searchCriteria?.search
    if (isSome(search)) {
      const patterns = search
        .split(' ')
        .slice(0, 10)
        .filter((word) => word.length > 0)
        .map((word) => `%${word}%`)

      let and: Prisma.MovieWhereInput[] = []
      patterns.forEach((pattern) => {
        let or: Prisma.MovieWhereInput[] = []

        or.push({
          movieInfo: {
            OR: [
              { title: { contains: pattern, mode: 'insensitive' } },
              { description: { contains: pattern, mode: 'insensitive' } },
              { imdbId: { contains: pattern, mode: 'insensitive' } },
              { alternativeTitles: { has: pattern } }
            ]
          }
        })

        or.push({
          crewMembers: {
            some: {
              crewMember: {
                is: {
                  OR: [
                    { name: { contains: pattern, mode: 'insensitive' } },
                    { imdbId: { contains: pattern, mode: 'insensitive' } }
                  ]
                }
              }
            }
          }
        })

        or.push({
          genres: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          studios: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          spokenLanguages: {
            some: {
              OR: [{ language: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          keywordCategories: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        and.push({ OR: or })
      })

      where.AND = and
    }

    const genre = searchCriteriaArgs.searchCriteria?.genre
    if (isSome(genre)) {
      where.genres = {
        ...where.genres,
        some: {
          name: {
            contains: genre
          }
        }
      }
    }

    const decade = searchCriteriaArgs.searchCriteria?.decade
    if (isSome(decade)) {
      const startDate = new Date(decade, 0, 1)
      const endDate = new Date(decade + 10, 0, 1)

      where.movieInfo = D.merge(where.movieInfo, {
        releaseDate: {
          gte: startDate,
          lt: endDate
        }
      })
    }

    const year = searchCriteriaArgs.searchCriteria?.year
    if (isSome(year)) {
      const startDate = new Date(year, 0, 1)
      const endDate = new Date(year + 1, 0, 1)

      where.movieInfo = D.merge(where.movieInfo, {
        releaseDate: {
          gte: startDate,
          lt: endDate
        }
      })
    }

    const keyword = searchCriteriaArgs.searchCriteria?.keyword
    if (isSome(keyword)) {
      where.keywordCategories = {
        some: {
          name: {
            contains: `%${keyword}%`,
            mode: 'insensitive'
          }
        }
      }
    }

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
    const prisma = getPrismaFromContext(ctx)

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
