import * as TypeGraphQL from 'type-graphql'

import { MoviesSearchCriteriaInput } from '@/graphql/movies/inputs/moviesSearchCriteriaInput'

@TypeGraphQL.ArgsType()
export class SearchMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesSearchCriteriaInput, {
    nullable: false
  })
  searchCriteria?: MoviesSearchCriteriaInput
}
