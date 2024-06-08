import * as TypeGraphQL from 'type-graphql'
import {
  FindManyMovieRatingArgs,
  MovieRating,
  MovieRatingCrudResolver
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

@TypeGraphQL.Resolver((_of) => MovieRating)
export class CustomMovieRatingCrudResolver extends MovieRatingCrudResolver {
  @TypeGraphQL.Query((_returns) => [MovieRating], {
    nullable: false
  })
  async movieRatingsSearchWithMovies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMovieRatingArgs,
    @TypeGraphQL.Args() searchCriteriaArgs: SearchMoviesArgs
  ): Promise<MovieRating[]> {
    const criteriaHandler = new MovieSearchCriteriaHandler(searchCriteriaArgs)
    const where = criteriaHandler.buildWhere()

    args.where = D.merge(args.where, {
      movie: { is: where }
    })

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movieRating.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}
