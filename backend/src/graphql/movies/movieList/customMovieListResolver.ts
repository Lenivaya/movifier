import * as TypeGraphQL from 'type-graphql'
import {
  FindManyMovieListArgs,
  Movie,
  MovieList
} from '@/generated/type-graphql'
import { GraphQLResolveInfo } from 'graphql/type'
import { SearchMovieListArgs } from '@/graphql/movies/args/searchMovieListArgs'
import { Prisma } from '@prisma/client'
import { isSome } from '@/lib/types/option'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'

@TypeGraphQL.Resolver()
export class CustomMovieListResolver {
  @TypeGraphQL.Query((_returns) => [MovieList], {
    nullable: false
  })
  async searchMovieLists(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMovieListArgs,
    @TypeGraphQL.Args() searchCriteriaArgs: SearchMovieListArgs
  ): Promise<Movie[]> {
    let where: Prisma.MovieListWhereInput = {}

    const search = searchCriteriaArgs.searchCriteria?.search
    if (isSome(search)) {
      const words = search
        .split(' ')
        .slice(0, 10)
        .filter((word) => word.length > 0)
        .map((word) => word.toLowerCase())

      let and: Prisma.MovieListWhereInput[] = []
      words.forEach((word) => {
        const pattern = `%${word}%`

        let or: Prisma.MovieListWhereInput[] = []

        or.push({
          name: { contains: pattern, mode: 'insensitive' }
        })

        or.push({
          description: { contains: pattern, mode: 'insensitive' }
        })

        or.push({
          movieListAuthor: {
            is: {
              OR: [
                {
                  name: { contains: pattern, mode: 'insensitive' },
                  username: { contains: pattern, mode: 'insensitive' }
                }
              ]
            }
          }
        })

        or.push({
          tags: { has: word }
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
    return getPrismaFromContext(ctx).movieList.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}
