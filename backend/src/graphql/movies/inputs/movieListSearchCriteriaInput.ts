import * as TypeGraphQL from 'type-graphql'
import { Option } from '@mobily/ts-belt'

@TypeGraphQL.InputType()
export class MovieListSearchCriteriaInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true
  })
  search?: Option<string>
}
