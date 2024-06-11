import * as TypeGraphQL from 'type-graphql'
import { Float, Int } from 'type-graphql'

@TypeGraphQL.ObjectType()
export class MovieStatsSummary {
  @TypeGraphQL.Field(() => Float)
  avgRating!: number

  @TypeGraphQL.Field(() => Int)
  totalViews!: number

  @TypeGraphQL.Field(() => Int)
  totalLikes!: number

  @TypeGraphQL.Field(() => Int)
  appearancesInLists!: number
}
