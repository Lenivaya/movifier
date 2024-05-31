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
