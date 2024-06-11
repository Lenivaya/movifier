import * as TypeGraphQL from 'type-graphql'
import {
  FindManyMovieReviewArgs,
  MovieReview,
  MovieReviewCrudResolver
} from '@/generated/type-graphql'
import type { GraphQLResolveInfo } from 'graphql/type'
import { SearchMoviesArgs } from '@/graphql/movies/args/searchMoviesArgs'
import { MovieSearchCriteriaHandler } from '@/search/handlers/movieSearchCriteriaHandler'
import { D } from '@mobily/ts-belt'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import { create } from 'mutative'
import { isSome } from '@/lib/types/option'
import { Prisma } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => MovieReview)
export class CustomMovieReviewCrudResolver extends MovieReviewCrudResolver {
  @TypeGraphQL.Query((_returns) => [MovieReview], {
    nullable: false
  })
  async movieReviewsSearchWithMovies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMovieReviewArgs,
    @TypeGraphQL.Args() searchCriteriaArgs: SearchMoviesArgs
  ): Promise<MovieReview[]> {
    const criteriaHandler = new MovieSearchCriteriaHandler(searchCriteriaArgs)
    const movieWhere = criteriaHandler.buildWhere()

    args.where = {
      AND: [
        args.where ?? {},
        {
          rating: {
            is: {
              movie: {
                // @ts-ignore
                is: movieWhere
              }
            }
          }
        }
      ]
    }

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movieReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}
