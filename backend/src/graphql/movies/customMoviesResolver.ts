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
      const words = search.split(' ')

      if (!where.OR) where.OR = []
      words.forEach((word) => {
        where.OR!.push({
          movieInfo: {
            OR: [
              { title: { contains: word, mode: 'insensitive' } },
              { description: { contains: word, mode: 'insensitive' } },
              { imdbId: { contains: word, mode: 'insensitive' } },
              { alternativeTitles: { has: word } }
            ]
          }
        })

        where.OR!.push({
          crewMembers: {
            some: {
              crewMember: {
                is: {
                  OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { imdbId: { contains: search, mode: 'insensitive' } }
                  ]
                }
              }
            }
          }
        })

        where.OR!.push({
          genres: {
            some: {
              OR: [{ name: { contains: search, mode: 'insensitive' } }]
            }
          }
        })

        where.OR!.push({
          studios: {
            some: {
              OR: [{ name: { contains: search, mode: 'insensitive' } }]
            }
          }
        })

        where.OR!.push({
          spokenLanguages: {
            some: {
              OR: [{ language: { contains: search, mode: 'insensitive' } }]
            }
          }
        })

        where.OR!.push({
          spokenLanguages: {
            some: {
              OR: [{ language: { contains: search, mode: 'insensitive' } }]
            }
          }
        })
      })
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
}
