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
    const where = criteriaHandler.buildWhere()

    args.where = D.merge(args.where, {
      rating: { is: { movie: { is: where } } }
    })

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movieReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}
