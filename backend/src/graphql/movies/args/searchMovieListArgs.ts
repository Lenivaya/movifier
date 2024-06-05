import * as TypeGraphQL from 'type-graphql'
import { MovieListSearchCriteriaInput } from '@/graphql/movies/inputs/movieListSearchCriteriaInput'

@TypeGraphQL.ArgsType()
export class SearchMovieListArgs {
  @TypeGraphQL.Field((_type) => MovieListSearchCriteriaInput, {
    nullable: false
  })
  searchCriteria?: MovieListSearchCriteriaInput
}
