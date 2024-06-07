import * as TypeGraphQL from 'type-graphql'
import { Option } from '@mobily/ts-belt'

@TypeGraphQL.InputType()
export class MoviesSearchCriteriaInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true
  })
  search?: Option<string>

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  genre?: Option<string>

  @TypeGraphQL.Field((_type) => Number, { nullable: true })
  decade?: Option<number>

  @TypeGraphQL.Field((_type) => Number, { nullable: true })
  year?: Option<number>

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  keyword?: Option<string>

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  language?: Option<string>

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  studio?: Option<string>
}
